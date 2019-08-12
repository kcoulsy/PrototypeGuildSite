const hookcord = require('hookcord');

exports.submit = (req, res) => {
    const Hook = new hookcord.Hook();
    const { DISC_HOOK_ID, DISC_HOOK_SECRET } = process.env;
    const {
        characterName,
        playerClass,
        playerRole,
        professionOne,
        professionTwo,
        discordTag,
        aboutSelf,
        value,
        experience,
        ui,
        anythingElse,
    } = req.body;
    const fields = [];

    if (characterName) {
        fields.push({
            name: 'Character Name',
            value: characterName,
        });
    }
    if (playerClass) {
        fields.push({
            name: 'Class',
            value: playerClass,
        });
    }
    if (playerRole) {
        fields.push({
            name: 'Role',
            value: playerRole,
        });
    }
    if (professionOne) {
        fields.push({
            name: 'Profession One',
            value: professionOne,
        });
    }
    if (professionTwo) {
        fields.push({
            name: 'Profession Two',
            value: professionTwo,
        });
    }
    if (discordTag) {
        fields.push({
            name: 'Discord Tag',
            value: discordTag,
        });
    }
    if (aboutSelf) {
        fields.push({
            name: 'Tell Us About Yourself',
            value: aboutSelf,
        });
    }
    if (value) {
        fields.push({
            name: 'What do you value in a guild?',
            value: value,
        });
    }
    if (experience) {
        fields.push({
            name: 'What is your exp?',
            value: experience,
        });
    }
    if (ui) {
        fields.push({
            name: 'UI Screenshot',
            value: ui,
        });
    }
    if (anythingElse) {
        fields.push({
            name: 'Anything Else?',
            value: anythingElse,
        });
    }

    Hook.login(DISC_HOOK_ID, DISC_HOOK_SECRET)
        .setPayload({
            embeds: [
                {
                    title: `New Application - ${characterName}`,
                    color: 15257231,
                    fields,
                },
            ],
        })
        .fire();

    res.send({ success: true });
};
