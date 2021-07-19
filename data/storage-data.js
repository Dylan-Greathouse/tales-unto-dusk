export function saveMercenary(mercenary) {
    const json = JSON.stringify(mercenary);
    localStorage.setItem('mercenary', json);
}


export function getMercenary() {
    const json = localStorage.getItem('mercenary');
    if (!json) return null;
    const mercenary = JSON.parse(json);
    return mercenary;
}