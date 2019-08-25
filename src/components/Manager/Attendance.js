import React from 'react';

export default class Attendance extends React.Component {
    state ={
        maxRank: 5
    }
    handleClick = ev => {
        ev.preventDefault();
        ev.stopPropagation();
        const buttonEl = ev.currentTarget;
        const liEl = buttonEl.closest('li');
        const playerIndex = liEl.getAttribute('data-player');
        const role = buttonEl.value;

        this.props.setGoing({
            playerId: parseInt(playerIndex, 10),
            role,
            late: false,
        });
    };

    getPlayers = () => {
        return (
            this.props.players.filter(player => player.rankIndex <= this.state.maxRank).map((player, i) => {
                if (this.props.attendance[player.id]) {
                    player.role = this.props.attendance[player.id].role;
                } else {
                    player.role = 'none';
                }
                return player;
            }) || []
        );
    };

    getGoingValues = players => {
        return players.reduce(
            (acctwo, player) => {
                switch (player.role) {
                    case 'tank':
                        acctwo.all++;
                        acctwo.tanks++;
                        break;
                    case 'heal':
                        acctwo.all++;
                        acctwo.heals++;
                        break;
                    case 'dps':
                        acctwo.all++;
                        acctwo.dps++;
                        break;
                    default:
                        break;
                }
                return acctwo;
            },
            { all: 0, tanks: 0, heals: 0, dps: 0 }
        );
    };

    getPlayerClassesFiltered = players => {
        return players.reduce((filtered, player) => {
            if (!filtered[player.class]) {
                filtered[player.class] = [];
            }
            filtered[player.class].push(player);
            return filtered;
        }, {});
    };

    render() {
        const players = this.getPlayers();
        const going = this.getGoingValues(players);
        const classFiltered = this.getPlayerClassesFiltered(players);

        return (
            <div className="card-container">
                <div className="card">
                    <span className="card-name">
                        Attendance {going.all} / 40 ({going.tanks} Tanks,{' '}
                        {going.heals} Heals, {going.dps} DPS)
                    </span>
                    <div className="rank-select">
                        Minimum Rank
                        <select value={this.state.maxRank} onChange={ev => this.setState({maxRank: ev.target.value})}>
                            <option value={0}>Guild Master</option>
                            <option value={1}>Officer</option>
                            <option value={2}>Trial Officer</option>
                            <option value={3}>Leader</option>
                            <option value={4}>Veteran</option>
                            <option value={5}>Raider</option>
                            <option value={6}>Trial</option>
                            <option value={7}>Member</option>
                            <option value={8}>Social</option>
                        </select>
                    </div>
                    <div className="types">
                        {Object.entries(classFiltered).map(
                            ([playerClass, players]) => {
                                return (
                                    <AttendanceClass
                                        key={playerClass}
                                        playerClass={playerClass}
                                        players={players}
                                        handleClick={this.handleClick}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const AttendanceClass = ({ playerClass, players, handleClick }) => {
    if (!players.length) return <div>Nothing</div>;
    return (
        <div className="attendance-type" key={playerClass}>
            <h5>{playerClass}</h5>
            <ul className="attendance-list">
                {players.map((player, idx) => {
                    return (
                        <AttendanceUser
                            key={player.id}
                            player={player}
                            playerClass={playerClass}
                            handleClick={handleClick}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

const AttendanceUser = ({ player, playerClass, handleClick }) => (
    <li data-player={player.id} data-class={playerClass} key={player.name}>
        <span className="name">{player.name}</span>
        <div className="attendance-options">
            {['warrior', 'druid'].includes(playerClass.toLowerCase()) ? (
                <button
                    onClick={handleClick}
                    className={player.role === 'tank' ? 'selected' : ''}
                    value="tank"
                >
                    Tank
                </button>
            ) : null}
            {['paladin', 'priest', 'druid'].includes(playerClass.toLowerCase()) ? (
                <button
                    onClick={handleClick}
                    className={player.role.toLowerCase() === 'heal' ? 'selected' : ''}
                    value="heal"
                >
                    Heal
                </button>
            ) : null}
            <button
                onClick={handleClick}
                className={player.role.toLowerCase() === 'dps' ? 'selected' : ''}
                value="dps"
            >
                DPS
            </button>
            <button
                className={player.role === 'none' ? 'selected na' : ''}
                value="none"
                onClick={handleClick}
            >
                Not Attending
            </button>
        </div>
    </li>
);
