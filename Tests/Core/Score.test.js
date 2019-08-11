const Score = require("../../Core/Entities/Score/Score.js");
const ScoreBuilder = require("../../Core/Entities/Score/ScoreBuilder.js");
const ScoreDataFetcher = require("../../Core/Entities/Score/ScoreDataFetcher.js");

const FactionTypes = require("../../Core/Utilities/Enums/FactionTypes.js");
const WorkTypes = require("../../Core/Utilities/Enums/WorkTypes.js");
const ComplicationTypes = require("../../Core/Utilities/Enums/ComplicationTypes.js");
const TargetTypes = require("../../Core/Utilities/Enums/TargetTypes.js");
const ClientTypes = require("../../Core/Utilities/Enums/ClientTypes.js");

test("Score - No options", () => {
    let data = ScoreDataFetcher();
    let score = ScoreBuilder(data);

    expect(score).toBeDefined();
    expect(score.client).toBeDefined();
    expect(score.target).toBeDefined();
    expect(score.work).toBeDefined();
    expect(score.faction).toBeDefined();
    expect(score.complication).toBeDefined();
    expect(score.connection).toBeDefined();
});

test("Score - criminal/underworld only options", () => {
    let data = ScoreDataFetcher();
    let options = new Score.ScoreOptions();
    options.setClientTypes(ClientTypes.criminal);
    options.setTargetTypes(TargetTypes.criminal);
    options.setWorkTypes(WorkTypes.underworld);
    options.setComplicationTypes(ComplicationTypes.criminal);
    options.setFactionTypes(FactionTypes.underworld);

    let score = ScoreBuilder(data, options);
    let targetValues = data.targets.criminal.childNodes.map(v => v.value);
    let workValues = data.workTypes.underworld.childNodes.map(v => v.value);
    let factionValues = data.factions.underworld.childNodes.map(v => v.value);
    let complicationValues = data.complications.criminal.childNodes.map(v => v.value);

    expect(targetValues).toContain(score.client);
    expect(targetValues).toContain(score.target);
    expect(workValues).toContain(score.work);
    expect(factionValues).toContain(score.faction);
    expect(complicationValues).toContain(score.complication);
    expect(score.connection).toBeDefined();
});

test("ScoreData file retrieval success", () => {
    let data = ScoreDataFetcher();
    expect(data).toBeDefined();

    expect(data.targets).toBeDefined();
    expect(data.targets.criminal).toBeDefined();
    expect(data.targets.civilian).toBeDefined();
    expect(data.targets.political).toBeDefined();
    expect(data.targets.strange).toBeDefined();

    expect(data.workTypes).toBeDefined();
    expect(data.workTypes.skullduggery).toBeDefined();
    expect(data.workTypes.underworld).toBeDefined();
    expect(data.workTypes.unnatural).toBeDefined();
    expect(data.workTypes.violence).toBeDefined();

    expect(data.factions).toBeDefined();
    expect(data.factions.institutions).toBeDefined();
    expect(data.factions.laborAndTrade).toBeDefined();
    expect(data.factions.theFringe).toBeDefined();
    expect(data.factions.underworld).toBeDefined();

    expect(data.complications).toBeDefined();
    expect(data.complications.criminal).toBeDefined();
    expect(data.complications.miscellaneous).toBeDefined();
    expect(data.complications.strange).toBeDefined();

    expect(data.connections).toBeDefined();
});
