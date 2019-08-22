import React from 'react';

export default class Attendance extends React.Component {
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
            this.props.players.map((player, i) => {
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
            {['paladin', 'priest', 'druid'].includes(playerClass) ? (
                <button
                    onClick={handleClick}
                    className={player.role === 'heal' ? 'selected' : ''}
                    value="heal"
                >
                    Heal
                </button>
            ) : null}
            <button
                onClick={handleClick}
                className={player.role === 'dps' ? 'selected' : ''}
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
