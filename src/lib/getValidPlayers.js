export default ({ players, valid }) => {
    return Object.values(players).filter(player => {
        if (player.role === 'none') return false;
        return (
            valid.includes(player.role) ||
            valid.includes(player.Player && player.Player.class.toLowerCase())
        );
    });
};
