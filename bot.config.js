/** Theme + identity for CosmicMix DJ. Everything brand-specific lives here. */
module.exports = {
    id: 'cosmicmix',
    name: 'CosmicMix DJ',
    short: 'CosmicMix',
    keyPrefix: 'CMX',
    tagline: "Futuristic DJ for your galaxy of friends.",
    footer: 'Prism Protocol',
    colors: { brand: 0x8b5cf6, success: 0x00ffaa, danger: 0xff3366, premium: 0xffc857 },
    emoji: { brand: '🌌', ok: '✅', error: '❌', premium: '💎', radio: '🛰️', wave: '〰️' },
    bar: { done: '━', head: '🪐', todo: '─' },
    statuses: [
        { name: "/play • across the cosmos", type: 'Listening' },
        { name: "{servers} galaxies", type: 'Watching' },
        { name: "/filter nightcore 🌙", type: 'Playing' }
    ],
    // Listener-supported radio from SomaFM (https://somafm.com). Please consider supporting them.
    stations: [
        { id: 'deepspace', name: "Deep Space One", genre: "Ambient space", url: 'https://ice1.somafm.com/deepspaceone-128-mp3' },
        { id: 'spacestation', name: "Space Station", genre: "Spaced-out electronica", url: 'https://ice1.somafm.com/spacestation-128-mp3' },
        { id: 'missioncontrol', name: "Mission Control", genre: "Ambient + NASA comms", url: 'https://ice1.somafm.com/missioncontrol-128-mp3' },
        { id: 'synphaera', name: "Synphaera", genre: "Modern electronic ambient", url: 'https://ice1.somafm.com/synphaera-128-mp3' },
        { id: 'thetrip', name: "The Trip", genre: "Progressive house", url: 'https://ice1.somafm.com/thetrip-128-mp3' }
    ],
    premium: { prices: { premium: '₹99/month', plus: '₹249/month' } },
    links: {
        panel: 'https://krishyaa06.github.io/prism-bots-panel/',
        support: 'https://dc.gg/prismprotocol',
        buy: 'https://krishyaa06.github.io/prism-bots-panel/#/premium/cosmicmix',
        github: 'https://github.com/krishyaa06/cosmicmix-dj-bot'
    }
};
