import React from "react";
import "bootstrap/dist/css/bootstrap.css";

var DnDCharacter = function DnDCharacter() {};

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

function StatBox(props) {
  var classes = "d-and-d-statbox";

  if (props.classes) {
    classes += " " + props.classes;
  }

  var modifier = "";

  if (props.value && !isNaN(Number(props.value))) {
    var modifierNum = Math.floor((Number(props.value) - 10) / 2);

    if (modifierNum > 0) {
      modifier = "+" + modifierNum;
    } else {
      modifier = modifierNum.toString();
    }
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      {
        className: classes,
      },
      React.createElement("label", null, props.label),
      React.createElement(
        "div",
        {
          className: "d-and-d-statbox-modifier",
        },
        modifier
      )
    ),
    React.createElement(
      "div",
      {
        className: "d-and-d-statbox-value",
      },
      React.createElement("input", {
        type: "text",
        value: props.value ? props.value : "",
        onChange: function onChange(e) {
          return props.onChange(props.name, e.target.value);
        },
      })
    )
  );
}

function StatRow(props) {
  var classes = "d-and-d-statrow";

  if (props.classes) {
    classes += " " + props.classes;
  }

  return React.createElement(
    "div",
    {
      className: classes,
    },
    React.createElement(
      "div",
      {
        className: "d-and-d-statrow-value",
      },
      React.createElement("input", {
        type: "text",
        value: props.value ? props.value : "",
        onChange: function onChange(e) {
          return props.onChange(props.name, e.target.value);
        },
      })
    ),
    React.createElement(
      "div",
      {
        className: "d-and-d-statrow-label",
      },
      React.createElement("label", null, props.label)
    )
  );
}

function Skill(props) {
  var classes = "d-and-d-skill";

  if (props.classes) {
    classes += " " + props.classes;
  }

  return React.createElement(
    "div",
    {
      className: classes,
    },
    React.createElement("div", {
      className: props.checked
        ? "d-and-d-skill-circle active"
        : "d-and-d-skill-circle",
      onClick: function onClick() {
        return props.onChange(props.name + "Checked", !props.checked);
      },
    }),
    React.createElement("input", {
      type: "text",
      value: props.value ? props.value : "",
      onChange: function onChange(e) {
        return props.onChange(props.name, e.target.value);
      },
    }),
    React.createElement("label", null, props.label),
    props.hint
      ? React.createElement(
          "span",
          {
            className: "d-and-d-skill-hint",
          },
          props.hint
        )
      : null
  );
}

function StatBox2(props) {
  var classes = "d-and-d-statbox type2";

  if (props.classes) {
    classes += " " + props.classes;
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      {
        className: classes,
      },
      React.createElement(
        "div",
        {
          className: "d-and-d-statbox-modifier",
        },
        React.createElement("input", {
          type: "text",
          value: props.value ? props.value : "",
          onChange: function onChange(e) {
            return props.onChange(props.name, e.target.value);
          },
        })
      ),
      props.labelTop != null
        ? React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              {
                className: "label-top",
              },
              props.labelTop
            )
          )
        : null,
      props.label != null
        ? React.createElement(
            "div",
            null,
            React.createElement("label", null, props.label)
          )
        : null
    )
  );
}

function DeathSave(props) {
  var classes = "d-and-d-deathsave";

  if (props.classes) {
    classes += " " + props.classes;
  }

  return React.createElement(
    "div",
    {
      className: classes,
    },
    React.createElement("label", null, props.label),
    React.createElement(
      "div",
      {
        style: {
          display: "inline-block",
        },
      },
      React.createElement("div", {
        className:
          props.value && props.value >= 1
            ? "d-and-d-skill-circle active"
            : "d-and-d-skill-circle",
        onClick: function onClick() {
          return props.onChange(props.name, props.value === 1 ? null : 1);
        },
      }),
      "=",
      React.createElement("div", {
        className:
          props.value && props.value >= 2
            ? "d-and-d-skill-circle active"
            : "d-and-d-skill-circle",
        onClick: function onClick() {
          return props.onChange(props.name, props.value === 2 ? null : 2);
        },
      }),
      "=",
      React.createElement("div", {
        className:
          props.value && props.value >= 3
            ? "d-and-d-skill-circle active"
            : "d-and-d-skill-circle",
        onClick: function onClick() {
          return props.onChange(props.name, props.value === 3 ? null : 3);
        },
      })
    )
  );
}

function AttackTable(props) {
  function updateValue(index, field, v) {
    var value = getValue().slice();
    value[index][field] = v;
    props.onChange(props.name, value);
  }

  function getValue() {
    var value = props.value;

    if (!value) {
      value = [];
    }

    while (value.length < props.rows) {
      value.push({});
    }

    return value;
  }

  var classes = "d-and-d-table";

  if (props.classes) {
    classes += " " + props.classes;
  }

  return React.createElement(
    "table",
    {
      className: classes,
    },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement("th", null, "Name"),
        React.createElement(
          "th",
          {
            style: {
              width: "70px",
            },
          },
          "Atk Bonus"
        ),
        React.createElement("th", null, "Damage/Type")
      )
    ),
    React.createElement(
      "tbody",
      null,
      getValue().map(function (v, index) {
        return React.createElement(
          "tr",
          {
            key: "d-and-d-table-row-" + props.name + index,
          },
          React.createElement(
            "td",
            null,
            React.createElement("input", {
              type: "text",
              value: v.name ? v.name : "",
              onChange: function onChange(e) {
                return updateValue(index, "name", e.target.value);
              },
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement("input", {
              type: "text",
              value: v.bonus ? v.bonus : "",
              onChange: function onChange(e) {
                return updateValue(index, "bonus", e.target.value);
              },
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement("input", {
              type: "text",
              value: v.damage ? v.damage : "",
              onChange: function onChange(e) {
                return updateValue(index, "damage", e.target.value);
              },
            })
          )
        );
      })
    )
  );
}

function Currency(props) {
  var classes = "d-and-d-currency";

  if (props.classes) {
    classes += " " + props.classes;
  }

  return React.createElement(
    "div",
    {
      className: classes,
    },
    React.createElement(
      "div",
      {
        className: "d-and-d-currency-label",
      },
      React.createElement("label", null, props.label)
    ),
    React.createElement(
      "div",
      {
        className: "d-and-d-currency-value",
      },
      React.createElement("input", {
        type: "text",
        value: props.value ? props.value : "",
        onChange: function onChange(e) {
          return props.onChange(props.name, e.target.value);
        },
      })
    )
  );
}

var initialState = {
  character: {},
};

var DnDCharacterStatsSheet = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(DnDCharacterStatsSheet, _React$Component);

  function DnDCharacterStatsSheet(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    if (props.defaultCharacter) {
      initialState.character = props.defaultCharacter;
    }

    _this.state = initialState;
    return _this;
  }

  var _proto = DnDCharacterStatsSheet.prototype;

  _proto.updateCharacter = function updateCharacter(name, value) {
    var oldCharacter = this.getCharacter();
    var newCharacter = {};
    Object.assign(newCharacter, oldCharacter);
    newCharacter[name] = value;

    if (!this.props.character) {
      this.setState({
        character: newCharacter,
      });
    }

    if (typeof this.props.onCharacterChanged === "function") {
      this.props.onCharacterChanged(newCharacter, name, value);
    }
  };

  _proto.getCharacter = function getCharacter() {
    var character = this.state.character;

    if (this.props.character) {
      character = this.props.character;
    }

    return character;
  };

  _proto.render = function render() {
    var _this2 = this;

    var character = this.getCharacter();
    return React.createElement(
      "div",
      {
        className: "d-and-d-character-sheet container-xl mt-5 mb-5",
      },
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            className: "row mb-4",
          },
          React.createElement(
            "div",
            {
              className: "col-md-3 pr-2 pl-2",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-page-title",
              },
              "D&D"
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-attribute-collection char-name pr-3 pl-3",
              },
              React.createElement("input", {
                type: "text",
                value: character.name ? character.name : "",
                onChange: function onChange(e) {
                  return _this2.updateCharacter("name", e.target.value);
                },
              })
            ),
            React.createElement(
              "label",
              {
                style: {
                  width: "100%",
                  textAlign: "right",
                  textTransform: "uppercase",
                  fontSize: "11px",
                },
              },
              "Character Name"
            )
          ),
          React.createElement(
            "div",
            {
              className: "col-md-9 pr-2 pl-2",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-attribute-collection pr-3 pl-3",
              },
              React.createElement(
                "div",
                {
                  className: "row pl-3 pr-3",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-md-3 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.classLevel ? character.classLevel : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "classLevel",
                        e.target.value
                      );
                    },
                  }),
                  React.createElement("label", null, "Class & Level")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-3 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.background ? character.background : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "background",
                        e.target.value
                      );
                    },
                  }),
                  React.createElement("label", null, "Background")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-3 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.playerName ? character.playerName : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "playerName",
                        e.target.value
                      );
                    },
                  }),
                  React.createElement("label", null, "Player Name")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-3 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.faction ? character.faction : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("faction", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Faction")
                )
              ),
              React.createElement(
                "div",
                {
                  className: "row pl-3 pr-3",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-md-3 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.race ? character.race : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("race", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Race")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-3 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.alignment ? character.alignment : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "alignment",
                        e.target.value
                      );
                    },
                  }),
                  React.createElement("label", null, "Alignment")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-3 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.xp ? character.xp : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("xp", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Experience Points")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-3 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.dciNo ? character.dciNo : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("dciNo", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "DCI Number")
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          {
            className: "row",
          },
          React.createElement(
            "div",
            {
              className: "col-md-4",
            },
            React.createElement(
              "div",
              {
                className: "row",
              },
              React.createElement(
                "div",
                {
                  className: "col-4 pr-1",
                },
                React.createElement(
                  "div",
                  {
                    className: "d-and-d-box gray",
                  },
                  React.createElement(StatBox, {
                    label: "Strength",
                    name: "str",
                    value: character.str,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(StatBox, {
                    label: "Dexterity",
                    name: "dex",
                    value: character.dex,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(StatBox, {
                    label: "Constitution",
                    name: "con",
                    value: character.con,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(StatBox, {
                    label: "Intelligence",
                    name: "int",
                    value: character["int"],
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(StatBox, {
                    label: "Wisdom",
                    name: "wis",
                    value: character.wis,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(StatBox, {
                    label: "Charisma",
                    name: "cha",
                    value: character.cha,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  })
                )
              ),
              React.createElement(
                "div",
                {
                  className: "col-8",
                },
                React.createElement(StatRow, {
                  label: "Inspiration",
                  name: "inspiration",
                  value: character.inspiration,
                  onChange: function onChange(name, value) {
                    _this2.updateCharacter(name, value);
                  },
                }),
                React.createElement(StatRow, {
                  classes: "rounded",
                  label: "Proficiency Bonus",
                  name: "proficiencyBonus",
                  value: character.proficiencyBonus,
                  onChange: function onChange(name, value) {
                    _this2.updateCharacter(name, value);
                  },
                }),
                React.createElement(
                  "div",
                  {
                    className: "d-and-d-box",
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        textAlign: "left",
                      },
                    },
                    React.createElement(Skill, {
                      label: "Strength",
                      name: "strSave",
                      value: character.strSave,
                      checked: character.strSaveChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Dexterity",
                      name: "dexSave",
                      value: character.dexSave,
                      checked: character.dexSaveChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Constitution",
                      name: "conSave",
                      value: character.conSave,
                      checked: character.conSaveChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Intelligence",
                      name: "intSave",
                      value: character.intSave,
                      checked: character.intSaveChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Wisdom",
                      name: "wisSave",
                      value: character.wisSave,
                      checked: character.wisSaveChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Charisma",
                      name: "chaSave",
                      value: character.chaSave,
                      checked: character.chaSaveChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    })
                  ),
                  React.createElement(
                    "label",
                    {
                      className: "d-and-d-title",
                      style: {
                        marginTop: "10px",
                      },
                    },
                    "Saving Throws"
                  )
                ),
                React.createElement(
                  "div",
                  {
                    className: "d-and-d-box",
                  },
                  React.createElement(
                    "div",
                    {
                      style: {
                        textAlign: "left",
                      },
                    },
                    React.createElement(Skill, {
                      label: "Acrobatics",
                      hint: "(Dex)",
                      name: "skillAcrobatics",
                      value: character.skillAcrobatics,
                      checked: character.skillAcrobaticsChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Animal Handling",
                      hint: "(Wis)",
                      name: "skillAnimalHandling",
                      value: character.skillAnimalHandling,
                      checked: character.skillAnimalHandlingChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Arcana",
                      hint: "(Int)",
                      name: "skillArcana",
                      value: character.skillArcana,
                      checked: character.skillArcanaChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Athletics",
                      hint: "(Str)",
                      name: "skillAthletics",
                      value: character.skillAthletics,
                      checked: character.skillAthleticsChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Deception",
                      hint: "(Cha)",
                      name: "skillDeception",
                      value: character.skillDeception,
                      checked: character.skillDeceptionChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "History",
                      hint: "(Int)",
                      name: "skillHistory",
                      value: character.skillHistory,
                      checked: character.skillHistoryChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Insight",
                      hint: "(Wis)",
                      name: "skillInsight",
                      value: character.skillInsight,
                      checked: character.skillInsightChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Intimidation",
                      hint: "(Cha)",
                      name: "skillIntimidation",
                      value: character.skillIntimidation,
                      checked: character.skillIntimidationChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Investigation",
                      hint: "(Int)",
                      name: "skillInvestigation",
                      value: character.skillInvestigation,
                      checked: character.skillInvestigationChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Medicine",
                      hint: "(Wis)",
                      name: "skillMedicine",
                      value: character.skillMedicine,
                      checked: character.skillMedicineChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Nature",
                      hint: "(Int)",
                      name: "skillNature",
                      value: character.skillNature,
                      checked: character.skillNatureChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Perception",
                      hint: "(Wis)",
                      name: "skillPerception",
                      value: character.skillPerception,
                      checked: character.skillPerceptionChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Performance",
                      hint: "(Cha)",
                      name: "skillPerformance",
                      value: character.skillPerformance,
                      checked: character.skillPerformanceChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Persuasion",
                      hint: "(Cha)",
                      name: "skillPersuasion",
                      value: character.skillPersuasion,
                      checked: character.skillPersuasionChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Religion",
                      hint: "(Int)",
                      name: "skillReligion",
                      value: character.skillReligion,
                      checked: character.skillReligionChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Sleight of Hand",
                      hint: "(Dex)",
                      name: "skillSlightOfHand",
                      value: character.skillSlightOfHand,
                      checked: character.skillSlightOfHandChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Stealth",
                      hint: "(Dex)",
                      name: "skillStealth",
                      value: character.skillStealth,
                      checked: character.skillStealthChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Survival",
                      hint: "(Wis)",
                      name: "skillSurvival",
                      value: character.skillSurvival,
                      checked: character.skillSurvivalChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(Skill, {
                      label: "Survival",
                      hint: "(Wis)",
                      name: "skillSurvival",
                      value: character.skillSurvival,
                      checked: character.skillSurvivalChecked,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    })
                  ),
                  React.createElement(
                    "label",
                    {
                      className: "d-and-d-title",
                      style: {
                        marginTop: "10px",
                      },
                    },
                    "Skills"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              {
                className: "mt-2",
              },
              React.createElement(StatRow, {
                classes: "rounded rounded-sides",
                label: "Passive Wisdom (Perception)",
                name: "passivePerception",
                value: character.passivePerception,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              })
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-box mt-4",
              },
              React.createElement("textarea", {
                value: character.otherProficiencies
                  ? character.otherProficiencies
                  : "",
                onChange: function onChange(e) {
                  return _this2.updateCharacter(
                    "otherProficiencies",
                    e.target.value
                  );
                },
                rows: 12,
              }),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "10px",
                  },
                },
                "Other Proficiencies & Languages"
              )
            )
          ),
          React.createElement(
            "div",
            {
              className: "col-md-4",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-box gray",
              },
              React.createElement(
                "div",
                {
                  className: "row",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-4 pr-2",
                  },
                  React.createElement(StatBox2, {
                    classes: "shield",
                    labelTop: "Armour",
                    label: "Class",
                    name: "ac",
                    value: character.ac,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  })
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-4 pr-2 pl-2",
                  },
                  React.createElement(StatBox2, {
                    label: "Initiative",
                    name: "init",
                    value: character.init,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  })
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-4 pl-2",
                  },
                  React.createElement(StatBox2, {
                    label: "Speed",
                    name: "speed",
                    value: character.speed,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  })
                )
              ),
              React.createElement(
                "div",
                {
                  className: "d-and-d-box white",
                  style: {
                    borderRadius: "8px 8px 0 0",
                    marginBottom: "5px",
                    paddingBottom: "5px",
                  },
                },
                React.createElement(
                  "div",
                  {
                    className: "d-and-d-gray-text",
                  },
                  React.createElement(
                    "label",
                    {
                      style: {
                        width: "95px",
                      },
                    },
                    "Hit Point Maximum"
                  ),
                  React.createElement("input", {
                    type: "text",
                    style: {
                      width: "calc(100% - 95px)",
                    },
                    className: "d-and-d-linput",
                    value: character.maxHp ? character.maxHp : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("maxHp", e.target.value);
                    },
                  })
                ),
                React.createElement("input", {
                  type: "text",
                  className: "d-and-d-cinput",
                  value: character.hp ? character.hp : "",
                  onChange: function onChange(e) {
                    return _this2.updateCharacter("hp", e.target.value);
                  },
                }),
                React.createElement(
                  "label",
                  {
                    className: "d-and-d-title",
                    style: {
                      marginTop: "5px",
                    },
                  },
                  "Current Hit Points"
                )
              ),
              React.createElement(
                "div",
                {
                  className: "d-and-d-box white mb-2",
                  style: {
                    borderRadius: "0 0 8px 8px",
                    paddingBottom: "5px",
                  },
                },
                React.createElement("input", {
                  type: "text",
                  className: "d-and-d-cinput",
                  value: character.tempHp ? character.tempHp : "",
                  onChange: function onChange(e) {
                    return _this2.updateCharacter("tempHp", e.target.value);
                  },
                }),
                React.createElement(
                  "label",
                  {
                    className: "d-and-d-title",
                    style: {
                      marginTop: "5px",
                    },
                  },
                  "Temporary Hit Points"
                )
              ),
              React.createElement(
                "div",
                {
                  className: "row mt-1",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-6 pr-1",
                  },
                  React.createElement(
                    "div",
                    {
                      className: "d-and-d-box white mb-0",
                      style: {
                        paddingBottom: "5px",
                      },
                    },
                    React.createElement(
                      "div",
                      {
                        className: "d-and-d-gray-text",
                      },
                      React.createElement(
                        "label",
                        {
                          style: {
                            width: "25px",
                          },
                        },
                        "Total"
                      ),
                      React.createElement("input", {
                        type: "text",
                        style: {
                          width: "calc(100% - 25px)",
                        },
                        className: "d-and-d-linput",
                        value: character.hitDiceMax ? character.hitDiceMax : "",
                        onChange: function onChange(e) {
                          return _this2.updateCharacter(
                            "hitDiceMax",
                            e.target.value
                          );
                        },
                      })
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "d-and-d-cinput",
                      value: character.hitDice ? character.hitDice : "",
                      onChange: function onChange(e) {
                        return _this2.updateCharacter(
                          "hitDice",
                          e.target.value
                        );
                      },
                    }),
                    React.createElement(
                      "label",
                      {
                        className: "d-and-d-title",
                        style: {
                          marginTop: "5px",
                        },
                      },
                      "Hit Dice"
                    )
                  )
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-6 pl-1",
                  },
                  React.createElement(
                    "div",
                    {
                      className: "d-and-d-box white mb-0",
                      style: {
                        paddingBottom: "5px",
                      },
                    },
                    React.createElement(DeathSave, {
                      classes: "d-and-d-save-success",
                      label: "Successes",
                      name: "deathsaveSuccesses",
                      value: character.deathsaveSuccesses,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(DeathSave, {
                      classes: "d-and-d-save-failure",
                      label: "Failures",
                      name: "deathsaveFailures",
                      value: character.deathsaveFailures,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    }),
                    React.createElement(
                      "label",
                      {
                        className: "d-and-d-title",
                        style: {
                          marginTop: "6px",
                        },
                      },
                      "Death Saves"
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-box mt-3",
              },
              React.createElement(AttackTable, {
                rows: 3,
                name: "attacks",
                value: character.attacks,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              }),
              React.createElement("textarea", {
                value: character.attacksText ? character.attacksText : "",
                onChange: function onChange(e) {
                  return _this2.updateCharacter("attacksText", e.target.value);
                },
                rows: 6,
              }),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "10px",
                  },
                },
                "Attacks & Spellcasting"
              )
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-box mt-4",
              },
              React.createElement(
                "div",
                {
                  className: "row",
                },
                React.createElement(
                  "div",
                  {
                    className: "",
                    style: {
                      width: "100px",
                    },
                  },
                  React.createElement(Currency, {
                    label: "CP",
                    name: "cp",
                    value: character.cp,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(Currency, {
                    label: "SP",
                    name: "sp",
                    value: character.sp,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(Currency, {
                    label: "EP",
                    name: "ep",
                    value: character.ep,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(Currency, {
                    label: "GP",
                    name: "gp",
                    value: character.gp,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(Currency, {
                    label: "PP",
                    name: "pp",
                    value: character.pp,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  })
                ),
                React.createElement(
                  "div",
                  {
                    className: "col",
                  },
                  React.createElement("textarea", {
                    className: "d-and-d-equipment-indent",
                    value: character.equipment ? character.equipment : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "equipment",
                        e.target.value
                      );
                    },
                    rows: 10,
                  })
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-12",
                  },
                  React.createElement("textarea", {
                    value: character.equipment2 ? character.equipment2 : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "equipment2",
                        e.target.value
                      );
                    },
                    rows: 4,
                  })
                )
              ),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "10px",
                  },
                },
                "Equipment"
              )
            )
          ),
          React.createElement(
            "div",
            {
              className: "col-md-4",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-box gray",
                style: {
                  marginBottom: "17px",
                },
              },
              React.createElement(
                "div",
                {
                  className: "d-and-d-box white",
                  style: {
                    borderRadius: "8px 8px 0 0",
                    marginBottom: "5px",
                    paddingTop: "1px",
                    paddingBottom: "5px",
                  },
                },
                React.createElement("textarea", {
                  value: character.personalityTraits
                    ? character.personalityTraits
                    : "",
                  onChange: function onChange(e) {
                    return _this2.updateCharacter(
                      "personalityTraits",
                      e.target.value
                    );
                  },
                  rows: 3,
                }),
                React.createElement(
                  "label",
                  {
                    className: "d-and-d-title",
                  },
                  "Personality Traits"
                )
              ),
              React.createElement(
                "div",
                {
                  className: "d-and-d-box white",
                  style: {
                    borderRadius: "0 0 0 0",
                    marginBottom: "5px",
                    paddingTop: "1px",
                    paddingBottom: "5px",
                  },
                },
                React.createElement("textarea", {
                  value: character.ideals ? character.ideals : "",
                  onChange: function onChange(e) {
                    return _this2.updateCharacter("ideals", e.target.value);
                  },
                  rows: 3,
                }),
                React.createElement(
                  "label",
                  {
                    className: "d-and-d-title",
                  },
                  "Ideals"
                )
              ),
              React.createElement(
                "div",
                {
                  className: "d-and-d-box white",
                  style: {
                    borderRadius: "0 0 0 0",
                    marginBottom: "5px",
                    paddingTop: "1px",
                    paddingBottom: "5px",
                  },
                },
                React.createElement("textarea", {
                  value: character.bonds ? character.bonds : "",
                  onChange: function onChange(e) {
                    return _this2.updateCharacter("bonds", e.target.value);
                  },
                  rows: 2,
                }),
                React.createElement(
                  "label",
                  {
                    className: "d-and-d-title",
                  },
                  "Bonds"
                )
              ),
              React.createElement(
                "div",
                {
                  className: "d-and-d-box white",
                  style: {
                    borderRadius: "0 0 8px 8px",
                    marginBottom: "0px",
                    paddingTop: "1px",
                    paddingBottom: "4px",
                  },
                },
                React.createElement("textarea", {
                  value: character.flaws ? character.flaws : "",
                  onChange: function onChange(e) {
                    return _this2.updateCharacter("flaws", e.target.value);
                  },
                  rows: 2,
                }),
                React.createElement(
                  "label",
                  {
                    className: "d-and-d-title",
                  },
                  "Flaws"
                )
              )
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-box mt-3",
              },
              React.createElement("textarea", {
                style: {
                  paddingBottom: "5px",
                },
                value: character.featuresTraits ? character.featuresTraits : "",
                onChange: function onChange(e) {
                  return _this2.updateCharacter(
                    "featuresTraits",
                    e.target.value
                  );
                },
                rows: 27,
              }),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "10px",
                  },
                },
                "Features & Traits"
              )
            )
          )
        )
      )
    );
  };

  return DnDCharacterStatsSheet;
})(React.Component);

var DnDPetStatsSheet = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(DnDPetStatsSheet, _React$Component);

  function DnDPetStatsSheet(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    if (props.defaultCharacter) {
      initialState.character = props.defaultCharacter;
    }

    _this.state = initialState;
    return _this;
  }

  var _proto = DnDPetStatsSheet.prototype;

  _proto.updateCharacter = function updateCharacter(name, value) {
    var oldCharacter = this.getCharacter();
    var newCharacter = {};
    Object.assign(newCharacter, oldCharacter);
    newCharacter[name] = value;

    if (!this.props.character) {
      this.setState({
        character: newCharacter,
      });
    }

    if (typeof this.props.onCharacterChanged === "function") {
      this.props.onCharacterChanged(newCharacter, name, value);
    }
  };

  _proto.getCharacter = function getCharacter() {
    var character = this.state.character;

    if (this.props.character) {
      character = this.props.character;
    }

    return character;
  };

  _proto.render = function render() {
    var _this2 = this;

    var character = this.getCharacter();
    // return (
    //   <div className="d-and-d-character-sheet container-xl mt-5 mb-5">
    //     <div className="row mb-4">
    //       <div className="col-md-3 pr-2 pl-2">
    //         <div className="d-and-d-page-title">D&D</div>
    //         <div className="d-and-d-attribute-collection char-name pr-3 pl-3">
    //           <input
    //             type="text"
    //             value={character.name}
    //             onChange={(e) => this.updateCharacter("name", e.target.value)}
    //           />
    //         </div>
    //         <label
    //           style={{
    //             width: "100%",
    //             textAlign: "right",
    //             textTransform: "uppercase",
    //             fontSize: "11px",
    //           }}
    //         >
    //           Character Name
    //         </label>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-4">
    //         <div className="d-and-d-box gray">
    //           <div className="row">
    //             <div className="col-4 pr-1">
    //               <div className="d-and-d-box white">
    //                 <label>Hitpoints</label>
    //                 <input
    //                   type="text"
    //                   value={character.hitpoints}
    //                   onChange={(e) =>
    //                     this.updateCharacter("hitpoints", e.target.value)
    //                   }
    //                 />
    //               </div>
    //               <div className="d-and-d-box white">
    //                 <label>Armor Class</label>
    //                 <input
    //                   type="text"
    //                   value={character.armorClass}
    //                   onChange={(e) =>
    //                     this.updateCharacter("armorClass", e.target.value)
    //                   }
    //                 />
    //               </div>
    //               <div className="d-and-d-box white">
    //                 <label>Speed</label>
    //                 <input
    //                   type="text"
    //                   value={character.speed}
    //                   onChange={(e) =>
    //                     this.updateCharacter("speed", e.target.value)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //             <div className="col-8">
    //               <div className="d-and-d-box gray">
    //                 <label>Strength</label>
    //                 <input
    //                   type="text"
    //                   value={character.strength}
    //                   onChange={(e) =>
    //                     this.updateCharacter("strength", e.target.value)
    //                   }
    //                 />
    //               </div>
    //               <div className="d-and-d-box gray">
    //                 <label>Dexterity</label>
    //                 <input
    //                   type="text"
    //                   value={character.dexterity}
    //                   onChange={(e) =>
    //                     this.updateCharacter("dexterity", e.target.value)
    //                   }
    //                 />
    //               </div>
    //               <div className="d-and-d-box gray">
    //                 <label>Constitution</label>
    //                 <input
    //                   type="text"
    //                   value={character.constitution}
    //                   onChange={(e) =>
    //                     this.updateCharacter("constitution", e.target.value)
    //                   }
    //                 />
    //               </div>
    //               <div className="d-and-d-box gray">
    //                 <label>Intelligence</label>
    //                 <input
    //                   type="text"
    //                   value={character.intelligence}
    //                   onChange={(e) =>
    //                     this.updateCharacter("intelligence", e.target.value)
    //                   }
    //                 />
    //               </div>
    //               <div className="d-and-d-box gray">
    //                 <label>Wisdom</label>
    //                 <input
    //                   type="text"
    //                   value={character.wisdom}
    //                   onChange={(e) =>
    //                     this.updateCharacter("wisdom", e.target.value)
    //                   }
    //                 />
    //               </div>
    //               <div className="d-and-d-box gray">
    //                 <label>Charisma</label>
    //                 <input
    //                   type="text"
    //                   value={character.charisma}
    //                   onChange={(e) =>
    //                     this.updateCharacter("charisma", e.target.value)
    //                   }
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="d-and-d-box mt-4">
    //           <label>Skills</label>
    //           <textarea
    //             value={character.skills}
    //             onChange={(e) => this.updateCharacter("skills", e.target.value)}
    //             rows="4"
    //           ></textarea>
    //         </div>
    //         <div className="d-and-d-box mt-4">
    //           <label>Languages</label>
    //           <textarea
    //             value={character.languages}
    //             onChange={(e) =>
    //               this.updateCharacter("languages", e.target.value)
    //             }
    //             rows="2"
    //           ></textarea>
    //         </div>
    //         <div className="d-and-d-box mt-4">
    //           <label>Special Ability</label>
    //           <textarea
    //             value={character.specialAbility}
    //             onChange={(e) =>
    //               this.updateCharacter("specialAbility", e.target.value)
    //             }
    //             rows="3"
    //           ></textarea>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
      <div className="d-and-d-character-sheet container-xl mt-5 mb-5">
        <div className="row mb-4">
          <div className="col-md-3 pr-2 pl-2">
            <div className="d-and-d-page-title">D&D</div>
            <div className="d-and-d-attribute-collection char-name pr-3 pl-3">
              <input
                type="text"
                value={character.name}
                onChange={(e) => this.updateCharacter("name", e.target.value)}
              />
            </div>
            <label
              style={{
                width: "100%",
                textAlign: "right",
                textTransform: "uppercase",
                fontSize: "11px",
              }}
            >
              Character Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="d-and-d-box gray">
              <div className="row">
                <div className="col-4 pr-1">
                  <div className="d-and-d-box white">
                    <label>Hitpoints</label>
                    <input
                      type="text"
                      value={character.hitpoints}
                      onChange={(e) =>
                        this.updateCharacter("hitpoints", e.target.value)
                      }
                    />
                  </div>
                  <div className="d-and-d-box white">
                    <label>Armor Class</label>
                    <input
                      type="text"
                      value={character.armorClass}
                      onChange={(e) =>
                        this.updateCharacter("armorClass", e.target.value)
                      }
                    />
                  </div>
                  <div className="d-and-d-box white">
                    <label>Speed</label>
                    <input
                      type="text"
                      value={character.speed}
                      onChange={(e) =>
                        this.updateCharacter("speed", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="d-and-d-box gray">
                    <label>Strength</label>
                    <input
                      type="text"
                      value={character.strength}
                      onChange={(e) =>
                        this.updateCharacter("strength", e.target.value)
                      }
                    />
                  </div>
                  <div className="d-and-d-box gray">
                    <label>Dexterity</label>
                    <input
                      type="text"
                      value={character.dexterity}
                      onChange={(e) =>
                        this.updateCharacter("dexterity", e.target.value)
                      }
                    />
                  </div>
                  <div className="d-and-d-box gray">
                    <label>Constitution</label>
                    <input
                      type="text"
                      value={character.constitution}
                      onChange={(e) =>
                        this.updateCharacter("constitution", e.target.value)
                      }
                    />
                  </div>
                  <div className="d-and-d-box gray">
                    <label>Intelligence</label>
                    <input
                      type="text"
                      value={character.intelligence}
                      onChange={(e) =>
                        this.updateCharacter("intelligence", e.target.value)
                      }
                    />
                  </div>
                  <div className="d-and-d-box gray">
                    <label>Wisdom</label>
                    <input
                      type="text"
                      value={character.wisdom}
                      onChange={(e) =>
                        this.updateCharacter("wisdom", e.target.value)
                      }
                    />
                  </div>
                  <div className="d-and-d-box gray">
                    <label>Charisma</label>
                    <input
                      type="text"
                      value={character.charisma}
                      onChange={(e) =>
                        this.updateCharacter("charisma", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-and-d-box mt-4">
              <label>Attacks & Spellcasting</label>
              <textarea
                value={character.attacks}
                onChange={(e) =>
                  this.updateCharacter("attacks", e.target.value)
                }
                rows="4"
              ></textarea>
            </div>
            <div className="d-and-d-box mt-4">
              <label>Special Ability</label>
              <textarea
                value={character.specialAbility}
                onChange={(e) =>
                  this.updateCharacter("specialAbility", e.target.value)
                }
                rows="3"
              ></textarea>
            </div>
            <div className="d-and-d-box mt-4">
              <label>Inventory</label>
              <textarea
                value={character.inventory}
                onChange={(e) =>
                  this.updateCharacter("inventory", e.target.value)
                }
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return DnDPetStatsSheet;
})(React.Component);

function Image(props) {
  function importImage(event) {
    console.log(event);

    if (event.target.files.length > 0) {
      console.log(event.target.files);

      if (event.target.files[0].size > 2000000) {
        window.alert(
          "Image is too large. Max size is 2 Mb. Please reduce the size and upload again."
        );
        return;
      }

      var fr = new FileReader();

      fr.onload = function (e) {
        if (
          e.target &&
          e.target.result &&
          typeof e.target.result === "string"
        ) {
          props.onChange(props.name, e.target.result);
        }
      };

      fr.readAsDataURL(event.target.files[0]);
    }
  }

  var classes = "d-and-d-image";

  if (props.classes) {
    classes += " " + props.classes;
  }

  var elementId = "d-and-d-image-" + props.name;
  return React.createElement(
    "div",
    {
      className: classes,
      style: {
        backgroundImage: props.value ? "url(" + props.value + ")" : "",
      },
      onClick: function onClick() {
        var _document$getElementB;

        return (_document$getElementB = document.getElementById(elementId)) ===
          null || _document$getElementB === void 0
          ? void 0
          : _document$getElementB.click();
      },
    },
    React.createElement("input", {
      style: {
        display: "none",
      },
      type: "file",
      id: elementId,
      accept: "image/*",
      onChange: function onChange(e) {
        return importImage(e);
      },
    })
  );
}

var initialState$1 = {
  character: {},
};

var DnDCharacterProfileSheet = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(DnDCharacterProfileSheet, _React$Component);

  function DnDCharacterProfileSheet(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    if (props.defaultCharacter) {
      initialState$1.character = props.defaultCharacter;
    }

    _this.state = initialState$1;
    return _this;
  }

  var _proto = DnDCharacterProfileSheet.prototype;

  _proto.updateCharacter = function updateCharacter(name, value) {
    var oldCharacter = this.getCharacter();
    var newCharacter = {};
    Object.assign(newCharacter, oldCharacter);
    newCharacter[name] = value;

    if (!this.props.character) {
      this.setState({
        character: newCharacter,
      });
    }

    if (typeof this.props.onCharacterChanged === "function") {
      this.props.onCharacterChanged(newCharacter, name, value);
    }
  };

  _proto.getCharacter = function getCharacter() {
    var character = this.state.character;

    if (this.props.character) {
      character = this.props.character;
    }

    return character;
  };

  _proto.render = function render() {
    var _this2 = this;

    var character = this.getCharacter();
    return React.createElement(
      "div",
      {
        className: "d-and-d-character-sheet container-xl mt-5 mb-5",
      },
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            className: "row mb-4",
          },
          React.createElement(
            "div",
            {
              className: "col-md-3 pr-2 pl-2",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-page-title",
              },
              "D&D"
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-attribute-collection char-name pr-3 pl-3",
              },
              React.createElement("input", {
                type: "text",
                value: character.name ? character.name : "",
                onChange: function onChange(e) {
                  return _this2.updateCharacter("name", e.target.value);
                },
              })
            ),
            React.createElement(
              "label",
              {
                style: {
                  width: "100%",
                  textAlign: "right",
                  textTransform: "uppercase",
                  fontSize: "11px",
                },
              },
              "Character Name"
            )
          ),
          React.createElement(
            "div",
            {
              className: "col-md-9 pr-2 pl-2",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-attribute-collection pr-3 pl-3",
              },
              React.createElement(
                "div",
                {
                  className: "row pl-3 pr-3",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-md-4 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.age ? character.age : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("age", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Age")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-4 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.height ? character.height : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("height", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Height")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-4 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.weight ? character.weight : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("weight", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Weight")
                )
              ),
              React.createElement(
                "div",
                {
                  className: "row pl-3 pr-3",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-md-4 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.eyes ? character.eyes : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("eyes", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Eyes")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-4 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.skin ? character.skin : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("skin", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Skin")
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-4 col-6 pl-0 pr-0",
                  },
                  React.createElement("input", {
                    type: "text",
                    value: character.hair ? character.hair : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("hair", e.target.value);
                    },
                  }),
                  React.createElement("label", null, "Hair")
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          {
            className: "row",
          },
          React.createElement(
            "div",
            {
              className: "col-md-4",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-box square",
              },
              React.createElement(Image, {
                name: "appearance",
                value: character.appearance,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              }),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "10px",
                  },
                },
                "Character Appearance"
              )
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-box mt-3",
              },
              React.createElement("textarea", {
                style: {
                  paddingBottom: "5px",
                },
                value: character.backstory ? character.backstory : "",
                onChange: function onChange(e) {
                  return _this2.updateCharacter("backstory", e.target.value);
                },
                rows: 26,
              }),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "10px",
                  },
                },
                "Character Backstory"
              )
            )
          ),
          React.createElement(
            "div",
            {
              className: "col-md-8",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-box",
              },
              React.createElement(
                "div",
                {
                  className: "row",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-md-6 border-right",
                  },
                  React.createElement(
                    "div",
                    {
                      className: "d-and-d-gray-text",
                      style: {
                        paddingBottom: "1px",
                      },
                    },
                    React.createElement(
                      "label",
                      {
                        style: {
                          width: "70px",
                        },
                      },
                      "Faction Rank"
                    ),
                    React.createElement("input", {
                      type: "text",
                      style: {
                        width: "calc(100% - 70px)",
                      },
                      className: "d-and-d-linput",
                      value: character.factionRank ? character.factionRank : "",
                      onChange: function onChange(e) {
                        return _this2.updateCharacter(
                          "factionRank",
                          e.target.value
                        );
                      },
                    })
                  ),
                  React.createElement("textarea", {
                    style: {
                      paddingBottom: "5px",
                    },
                    value: character.allies ? character.allies : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("allies", e.target.value);
                    },
                    rows: 16,
                  })
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-6",
                  },
                  React.createElement(
                    "div",
                    {
                      className: "d-and-d-box gray noborder",
                      style: {
                        marginBottom: "13px",
                      },
                    },
                    React.createElement(
                      "div",
                      {
                        className: "d-and-d-faction-input",
                      },
                      React.createElement("label", null, "Faction"),
                      React.createElement("input", {
                        type: "text",
                        value: character.faction ? character.faction : "",
                        onChange: function onChange(e) {
                          return _this2.updateCharacter(
                            "faction",
                            e.target.value
                          );
                        },
                      })
                    ),
                    React.createElement(Image, {
                      classes: "faction",
                      name: "factionImg",
                      value: character.factionImg,
                      onChange: function onChange(name, value) {
                        _this2.updateCharacter(name, value);
                      },
                    })
                  ),
                  React.createElement("textarea", {
                    style: {
                      paddingBottom: "5px",
                    },
                    value: character.allies2 ? character.allies2 : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("allies2", e.target.value);
                    },
                    rows: 3,
                  })
                )
              ),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "10px",
                  },
                },
                "Allies & Organisations"
              )
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-box mt-3",
              },
              React.createElement(
                "div",
                {
                  className: "row",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-md-6 border-right",
                  },
                  React.createElement("textarea", {
                    style: {
                      paddingBottom: "5px",
                    },
                    value: character.additionalFeatures
                      ? character.additionalFeatures
                      : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "additionalFeatures",
                        e.target.value
                      );
                    },
                    rows: 13,
                  })
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-6",
                  },
                  React.createElement("textarea", {
                    style: {
                      paddingBottom: "5px",
                    },
                    value: character.additionalFeatures2
                      ? character.additionalFeatures2
                      : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "additionalFeatures2",
                        e.target.value
                      );
                    },
                    rows: 13,
                  })
                )
              ),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "10px",
                  },
                },
                "Additional Features & Traits"
              )
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-box mt-3",
              },
              React.createElement(
                "div",
                {
                  className: "row",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-md-6 border-right",
                  },
                  React.createElement(StatRow, {
                    classes: "m-2 rounded rounded-sides wide-input",
                    label: "Total Non-Consumable Magic Items",
                    name: "totalNonConsumableMagicItems",
                    value: character.totalNonConsumableMagicItems,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement("textarea", {
                    style: {
                      paddingBottom: "5px",
                      marginTop: "2px",
                    },
                    value: character.treasure ? character.treasure : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter("treasure", e.target.value);
                    },
                    rows: 8,
                  })
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-md-6",
                  },
                  React.createElement("textarea", {
                    style: {
                      paddingBottom: "5px",
                      marginTop: "4px",
                    },
                    value: character.treasure2 ? character.treasure2 : "",
                    onChange: function onChange(e) {
                      return _this2.updateCharacter(
                        "treasure2",
                        e.target.value
                      );
                    },
                    rows: 10,
                  })
                )
              ),
              React.createElement(
                "label",
                {
                  className: "d-and-d-title",
                  style: {
                    marginTop: "4px",
                  },
                },
                "Treasure"
              )
            )
          )
        )
      )
    );
  };

  return DnDCharacterProfileSheet;
})(React.Component);

function SpellTable(props) {
  function updateValue(index, field, v) {
    var value = getValue().slice();
    value[index][field] = v;
    props.onChange(props.name, value);
  }

  function getValue() {
    var value = props.value;

    if (!value) {
      value = [];
    }

    while (value.length < props.rows) {
      value.push({});
    }

    return value;
  }

  function renderSlotsRemaining() {
    var slotCount = 6;

    if (
      props.slotsValue != null &&
      props.slotsValue !== "" &&
      Number(props.slotsValue) != null
    ) {
      slotCount = Number(props.slotsValue);
    }

    var slots = [];

    var _loop = function _loop(i1) {
      slots.push(
        React.createElement("div", {
          key: "d-and-d-table-slot-" + props.name + i1,
          className:
            props.slotsUsedValue && props.slotsUsedValue >= i1
              ? "d-and-d-skill-circle active"
              : "d-and-d-skill-circle",
          onClick: function onClick() {
            return props.onChange(
              props.slotsUsedName,
              props.slotsUsedValue === i1 ? null : i1
            );
          },
        })
      );
    };

    for (var i1 = 1; i1 <= slotCount; i1++) {
      _loop(i1);
    }

    return slots;
  }

  var classes = "d-and-d-spelllist";

  if (props.classes) {
    classes += " " + props.classes;
  }

  return React.createElement(
    "div",
    {
      className: classes,
      style: props.style,
    },
    props.showLabels
      ? React.createElement(
          "div",
          {
            className: "d-and-d-spell-header-labels",
          },
          React.createElement(
            "label",
            {
              style: {
                width: "20px",
              },
            },
            "Spell Level"
          ),
          React.createElement(
            "label",
            {
              style: {
                width: "80px",
              },
            },
            "Slots Total"
          ),
          React.createElement(
            "label",
            {
              style: {
                width: "calc(100% - 100px)",
              },
            },
            "Slots Remaining"
          )
        )
      : null,
    React.createElement(
      "div",
      {
        className: "d-and-d-spell-header",
      },
      React.createElement(
        "div",
        {
          className: "d-and-d-spell-level",
        },
        props.level
      ),
      props.level === 0
        ? React.createElement(
            "div",
            {
              className: "d-and-d-spell-slots",
            },
            React.createElement("label", null, "Cantrips")
          )
        : React.createElement(
            "div",
            {
              className: "d-and-d-spell-slots",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-spell-slots-total",
              },
              React.createElement("input", {
                type: "text",
                value: props.slotsValue ? props.slotsValue : "",
                onChange: function onChange(e) {
                  return props.onChange(props.slotsName, e.target.value);
                },
              })
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-spell-slots-remaining",
              },
              renderSlotsRemaining()
            )
          )
    ),
    React.createElement(
      "table",
      null,
      props.showLabels
        ? React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                {
                  style: {
                    width: "30px",
                    position: "absolute",
                    left: "-7px",
                  },
                },
                "Prepared"
              ),
              React.createElement("th", null, "Spell Name")
            )
          )
        : null,
      React.createElement(
        "tbody",
        null,
        getValue().map(function (v, index) {
          return React.createElement(
            "tr",
            {
              key: "d-and-d-table-row-" + props.name + index,
            },
            props.level > 0
              ? React.createElement(
                  "td",
                  {
                    className: "d-and-d-spell-prepared",
                  },
                  React.createElement("div", {
                    className: v.prepared
                      ? "d-and-d-skill-circle active"
                      : "d-and-d-skill-circle",
                    onClick: function onClick() {
                      return updateValue(index, "prepared", !v.prepared);
                    },
                  })
                )
              : null,
            React.createElement(
              "td",
              null,
              React.createElement("input", {
                type: "text",
                value: v.name ? v.name : "",
                onChange: function onChange(e) {
                  return updateValue(index, "name", e.target.value);
                },
              })
            )
          );
        })
      )
    )
  );
}

var initialState$2 = {
  character: {},
};

var DnDCharacterSpellsSheet = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(DnDCharacterSpellsSheet, _React$Component);

  function DnDCharacterSpellsSheet(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    if (props.defaultCharacter) {
      initialState$2.character = props.defaultCharacter;
    }

    _this.state = initialState$2;
    return _this;
  }

  var _proto = DnDCharacterSpellsSheet.prototype;

  _proto.updateCharacter = function updateCharacter(name, value) {
    var oldCharacter = this.getCharacter();
    var newCharacter = {};
    Object.assign(newCharacter, oldCharacter);
    newCharacter[name] = value;

    if (!this.props.character) {
      this.setState({
        character: newCharacter,
      });
    }

    if (typeof this.props.onCharacterChanged === "function") {
      this.props.onCharacterChanged(newCharacter, name, value);
    }
  };

  _proto.getCharacter = function getCharacter() {
    var character = this.state.character;

    if (this.props.character) {
      character = this.props.character;
    }

    return character;
  };

  _proto.render = function render() {
    var _this2 = this;

    var character = this.getCharacter();
    return React.createElement(
      "div",
      {
        className: "d-and-d-character-sheet container-xl mt-5 mb-5",
      },
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            className: "row mb-4",
          },
          React.createElement(
            "div",
            {
              className: "col-md-3 pr-2 pl-2",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-page-title",
              },
              "D&D"
            ),
            React.createElement(
              "div",
              {
                className: "d-and-d-attribute-collection char-name pr-3 pl-3",
              },
              React.createElement("input", {
                type: "text",
                value: character.spellcastingClass
                  ? character.spellcastingClass
                  : "",
                onChange: function onChange(e) {
                  return _this2.updateCharacter(
                    "spellcastingClass",
                    e.target.value
                  );
                },
              })
            ),
            React.createElement(
              "label",
              {
                style: {
                  width: "100%",
                  textAlign: "right",
                  textTransform: "uppercase",
                  fontSize: "11px",
                },
              },
              "Spellcasting Class/Ability"
            )
          ),
          React.createElement(
            "div",
            {
              className: "col-md-9 pr-2 pl-2",
              style: {
                marginTop: "18px",
              },
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-attribute-collection gray pr-3 pl-3",
              },
              React.createElement(
                "div",
                {
                  className: "row pl-3 pr-3",
                },
                React.createElement(
                  "div",
                  {
                    className: "col-4 pr-4 pl-4",
                  },
                  React.createElement(StatBox2, {
                    name: "preparedSpellsTotal",
                    value: character.preparedSpellsTotal,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(
                    "label",
                    {
                      style: {
                        textTransform: "none",
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "0",
                      },
                    },
                    "Prepared Spells"
                  ),
                  React.createElement(
                    "label",
                    {
                      style: {
                        textTransform: "none",
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "0",
                      },
                    },
                    "Total"
                  )
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-4 pr-4 pl-4",
                  },
                  React.createElement(StatBox2, {
                    name: "spellSaveDC",
                    value: character.spellSaveDC,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(
                    "label",
                    {
                      style: {
                        textTransform: "none",
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "0",
                      },
                    },
                    "Spell Save DC"
                  )
                ),
                React.createElement(
                  "div",
                  {
                    className: "col-4 pr-4 pl-4",
                  },
                  React.createElement(StatBox2, {
                    name: "spellAttackBonus",
                    value: character.spellAttackBonus,
                    onChange: function onChange(name, value) {
                      _this2.updateCharacter(name, value);
                    },
                  }),
                  React.createElement(
                    "label",
                    {
                      style: {
                        textTransform: "none",
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "0",
                      },
                    },
                    "Spell Attack"
                  ),
                  React.createElement(
                    "label",
                    {
                      style: {
                        textTransform: "none",
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "0",
                      },
                    },
                    "Bonus"
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          {
            className: "row",
          },
          React.createElement(
            "div",
            {
              className: "col-md-4",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-box",
              },
              React.createElement(SpellTable, {
                level: 0,
                rows: 9,
                name: "cantrips",
                value: character.cantrips,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
                style: {
                  marginBottom: "23px",
                },
              }),
              React.createElement(SpellTable, {
                level: 1,
                rows: 12,
                showLabels: true,
                name: "lvl1Spells",
                slotsName: "lvl1SpellSlotsTotal",
                slotsUsedName: "lvl1SpellSlotsUsed",
                value: character.lvl1Spells,
                slotsValue: character.lvl1SpellSlotsTotal,
                slotsUsedValue: character.lvl1SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              }),
              React.createElement(SpellTable, {
                level: 2,
                rows: 13,
                name: "lvl2Spells",
                slotsName: "lvl2SpellSlotsTotal",
                slotsUsedName: "lvl2SpellSlotsUsed",
                value: character.lvl2Spells,
                slotsValue: character.lvl2SpellSlotsTotal,
                slotsUsedValue: character.lvl2SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              })
            )
          ),
          React.createElement(
            "div",
            {
              className: "col-md-4",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-box",
              },
              React.createElement(SpellTable, {
                level: 3,
                rows: 13,
                name: "lvl3Spells",
                slotsName: "lvl3SpellSlotsTotal",
                slotsUsedName: "lvl3SpellSlotsUsed",
                value: character.lvl3Spells,
                slotsValue: character.lvl3SpellSlotsTotal,
                slotsUsedValue: character.lvl3SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              }),
              React.createElement(SpellTable, {
                level: 4,
                rows: 13,
                name: "lvl4Spells",
                slotsName: "lvl4SpellSlotsTotal",
                slotsUsedName: "lvl4SpellSlotsUsed",
                value: character.lvl4Spells,
                slotsValue: character.lvl4SpellSlotsTotal,
                slotsUsedValue: character.lvl4SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              }),
              React.createElement(SpellTable, {
                level: 5,
                rows: 9,
                name: "lvl5Spells",
                slotsName: "lvl5SpellSlotsTotal",
                slotsUsedName: "lvl5SpellSlotsUsed",
                value: character.lvl5Spells,
                slotsValue: character.lvl5SpellSlotsTotal,
                slotsUsedValue: character.lvl5SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              })
            )
          ),
          React.createElement(
            "div",
            {
              className: "col-md-4",
            },
            React.createElement(
              "div",
              {
                className: "d-and-d-box",
              },
              React.createElement(SpellTable, {
                level: 6,
                rows: 9,
                name: "lvl6Spells",
                slotsName: "lvl6SpellSlotsTotal",
                slotsUsedName: "lvl6SpellSlotsUsed",
                value: character.lvl6Spells,
                slotsValue: character.lvl6SpellSlotsTotal,
                slotsUsedValue: character.lvl6SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              }),
              React.createElement(SpellTable, {
                level: 7,
                rows: 9,
                name: "lvl7Spells",
                slotsName: "lvl7SpellSlotsTotal",
                slotsUsedName: "lvl7SpellSlotsUsed",
                value: character.lvl7Spells,
                slotsValue: character.lvl7SpellSlotsTotal,
                slotsUsedValue: character.lvl7SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              }),
              React.createElement(SpellTable, {
                level: 8,
                rows: 7,
                name: "lvl8Spells",
                slotsName: "lvl8SpellSlotsTotal",
                slotsUsedName: "lvl8SpellSlotsUsed",
                value: character.lvl8Spells,
                slotsValue: character.lvl8SpellSlotsTotal,
                slotsUsedValue: character.lvl8SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              }),
              React.createElement(SpellTable, {
                level: 9,
                rows: 7,
                name: "lvl9Spells",
                slotsName: "lvl9SpellSlotsTotal",
                slotsUsedName: "lvl9SpellSlotsUsed",
                value: character.lvl9Spells,
                slotsValue: character.lvl9SpellSlotsTotal,
                slotsUsedValue: character.lvl9SpellSlotsUsed,
                onChange: function onChange(name, value) {
                  _this2.updateCharacter(name, value);
                },
              })
            )
          )
        )
      )
    );
  };

  return DnDCharacterSpellsSheet;
})(React.Component);

export {
  DnDCharacter,
  DnDCharacterProfileSheet,
  DnDCharacterSpellsSheet as DnDCharacterSpellSheet,
  DnDCharacterStatsSheet,
  DnDPetStatsSheet,
};
//# sourceMappingURL=index.modern.js.map
