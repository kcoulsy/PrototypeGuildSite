import isArray from './isArray';
import isObject from './isArray';

export default schema => {
    let errors = [];
    let isValid = true;

    Object.entries(schema).forEach(([key, value]) => {
        switch (key) {
            case 'raid':
                if (typeof value !== 'string') {
                    errors.push('Key "Raid" must be a string');
                    isValid = false;
                }
                break;
            case 'sections':
                if (!isArray(value)) {
                    errors.push('Key "Sections" must be an array');
                    isValid = false;
                    return;
                }
                value.forEach(section => {
                    // console.log(section);
                    // if (typeof section !== 'object') {
                    //     errors.push('Value in "sections" must be an object');
                    //     isValid = false;
                    //     return;
                    // }
                    Object.entries(section).forEach(
                        ([sectionKey, sectionValue]) => {
                            switch (sectionKey) {
                                case 'name':
                                    if (typeof sectionValue !== 'string') {
                                        errors.push(
                                            'Key "name" in "sections" must be a string'
                                        );
                                        isValid = false;
                                    }
                                    break;
                                case 'types':
                                    if (!isArray(sectionValue)) {
                                        errors.push(
                                            'Key "types" in "sections" must be an array'
                                        );
                                        isValid = false;
                                        return;
                                    }
                                    sectionValue.forEach(type => {
                                        // if (!isObject(type)) {
                                        //     errors.push('Value in "types" must be an object');
                                        //     isValid = false;
                                        //     return;
                                        // }
                                        Object.entries(type).forEach(
                                            ([typeKey, typeValue]) => {
                                                switch (typeKey) {
                                                    case 'name':
                                                        if (
                                                            typeof typeValue !==
                                                            'string'
                                                        ) {
                                                            errors.push(
                                                                'Key "name" in "types" must be a string'
                                                            );
                                                            isValid = false;
                                                        }
                                                        break;
                                                    case 'validClasses':
                                                        if (
                                                            !isArray(typeValue)
                                                        ) {
                                                            errors.push(
                                                                'Key "validClasses" in "types" must be an array'
                                                            );
                                                            isValid = false;
                                                            return;
                                                        }
                                                        typeValue.map(
                                                            playerClass => {
                                                                if (
                                                                    ![
                                                                        'warrior',
                                                                        'druid',
                                                                        'paladin',
                                                                        'hunter',
                                                                        'rogue',
                                                                        'mage',
                                                                        'priest',
                                                                        'warlock',
                                                                    ].includes(
                                                                        playerClass.toLowerCase()
                                                                    )
                                                                ) {
                                                                    errors.push(
                                                                        `Value ${playerClass} in "validClasses" is not a valid option`
                                                                    );
                                                                    isValid = false;
                                                                }
                                                            }
                                                        );
                                                        break;
                                                    case 'assignments':
                                                        if (
                                                            !isArray(typeValue)
                                                        ) {
                                                            errors.push(
                                                                'Key "assignments" in "types" must be an array'
                                                            );
                                                            isValid = false;
                                                            return;
                                                        }
                                                        break;
                                                    default:
                                                        errors.push(
                                                            `Key "${typeKey}" in "types" does nothing`
                                                        );
                                                        break;
                                                }
                                            }
                                        );
                                    });
                                    break;
                                case 'notes':
                                    break;
                                default:
                                    errors.push(
                                        `Key "${sectionKey}" in "sections" does nothing`
                                    );
                                    break;
                            }
                        }
                    );
                });
                break;
            default:
                errors.push(`Key "${key}" in base does nothing`);
                break;
        }
    });

    return {
        errors,
        isValid,
    };
};
