import React from "react";

export default class Attendace extends React.Component {
  state = {
    players: [],
    going: 0
  };
  componentDidMount() {
    const { players } = this.props;

    this.setState({
      players: players.map((player, i) => {
        player.id = i;
        player.value = "none";
        return player;
      })
    });
  }

  handleClick = ev => {
    ev.preventDefault();
    ev.stopPropagation();
    const buttonEl = ev.currentTarget;
    const liEl = buttonEl.closest("li");
    const playerIndex = liEl.getAttribute("data-player");
    const value = buttonEl.value;

    const { players } = this.state;
    players[playerIndex].value = value;

    this.setState({ players });
    console.log({
      id: parseInt(playerIndex, 10),
      eventId: this.props.eventId,
      value,
      late: false
    });
    this.props.setGoing(
      this.state.players.filter(player => {
        return player.value !== "none";
      })
    );
  };

  getGoingValues = () => {
    return this.state.players.reduce(
      (acctwo, player) => {
        switch (player.value) {
          case "tank":
            acctwo.all++;
            acctwo.tanks++;
            break;
          case "heal":
            acctwo.all++;
            acctwo.heals++;
            break;
          case "dps":
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

  getPlayerClassesFiltered = () => {
    return this.state.players.reduce((filtered, player) => {
      if (!filtered[player.playerClass]) {
        filtered[player.playerClass] = [];
      }
      filtered[player.playerClass].push(player);
      return filtered;
    }, {});
  };

  render() {
    const going = this.getGoingValues();
    const classFiltered = this.getPlayerClassesFiltered();

    return (
      <div className="card-container">
        <div className="card">
          <span className="card-name">
            Attendance {going.all} / 40 ({going.tanks} Tanks, {going.heals}{" "}
            Heals, {going.dps} DPS)
          </span>
          <div className="types">
            {this.state.players.player}
            {Object.entries(classFiltered).map(([playerClass, players]) => {
              if (!players.length) return;
              return (
                <div className="attendance-type" key={playerClass}>
                  <h5>{playerClass}</h5>
                  <ul className="attendance-list">
                    {players.map((player, idx) => {
                      return (
                        <li
                          data-player={player.id}
                          data-class={playerClass}
                          key={player.name}
                        >
                          <span className="name">{player.name}</span>
                          <div className="attendance-options">
                            {["warrior", "druid"].includes(playerClass) ? (
                              <button
                                onClick={this.handleClick}
                                className={
                                  player.value === "tank" ? "selected" : ""
                                }
                                value="tank"
                              >
                                Tank
                              </button>
                            ) : null}
                            {["paladin", "priest", "druid"].includes(
                              playerClass
                            ) ? (
                              <button
                                onClick={this.handleClick}
                                className={
                                  player.value === "heal" ? "selected" : ""
                                }
                                value="heal"
                              >
                                Heal
                              </button>
                            ) : null}
                            <button
                              onClick={this.handleClick}
                              className={
                                player.value === "dps" ? "selected" : ""
                              }
                              value="dps"
                            >
                              DPS
                            </button>
                            <button
                              className={
                                player.value === "none" ? "selected na" : ""
                              }
                              value="none"
                              onClick={this.handleClick}
                            >
                              Not Attending
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
