import isArray from './isArray';
import isObject from './isObject';

export default schema => {
    let errors = [];
    let isValid = true;

    if (!schema.hasOwnProperty('raid')) {
        errors.push('Key "Raid" is required');
        isValid = false;
    }
    if (!schema.hasOwnProperty('sections')) {
        errors.push('Key "sections" is required');
        isValid = false;
    }
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
                    if (!isObject(section)) {
                        errors.push('Value in "sections" must be an object');
                        isValid = false;
                        return;
                    }
                    if (!section.hasOwnProperty('name')) {
                        errors.push('Key "name" in "section" is required');
                        isValid = false;
                    }
                    if (!section.hasOwnProperty('types')) {
                        errors.push('Key "types" in "section" is required');
                        isValid = false;
                    }
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
                                        if (!isObject(type)) {
                                            errors.push(
                                                'Value in "types" must be an object'
                                            );
                                            isValid = false;
                                            return;
                                        }

                                        if (!type.hasOwnProperty('name')) {
                                            errors.push(
                                                'Key "name" in "type" is required'
                                            );
                                            isValid = false;
                                        }
                                        if (!type.hasOwnProperty('valid')) {
                                            errors.push(
                                                'Key "valid" in "type" is required'
                                            );
                                            isValid = false;
                                        }
                                        if (
                                            !type.hasOwnProperty('assignments')
                                        ) {
                                            errors.push(
                                                'Key "assignments" in "type" is required'
                                            );
                                            isValid = false;
                                        }
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
                                                    case 'valid':
                                                        if (
                                                            !isArray(typeValue)
                                                        ) {
                                                            errors.push(
                                                                'Key "valid" in "types" must be an array'
                                                            );
                                                            isValid = false;
                                                            return;
                                                        }
                                                        typeValue.map(role => {
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
                                                                    'tank',
                                                                    'heal',
                                                                    'damage',
                                                                ].includes(
                                                                    role.toLowerCase()
                                                                )
                                                            ) {
                                                                errors.push(
                                                                    `Value ${role} in "valid" is not a valid option`
                                                                );
                                                                isValid = false;
                                                            }
                                                        });
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
