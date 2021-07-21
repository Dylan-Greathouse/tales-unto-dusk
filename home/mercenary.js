function makeMercenary(formData) {
    const mercenary = {
        name: formData.get('name'),
        job: formData.get('job'),
        hp: 50,
        gold: 0,
        completed: {}



        
    };
    return mercenary;
}

export const newMercenary = (formData) => ({
    name: formData.get('name'),
    job: formData.get('job'),
    hp: 50,
    gold: 0,
    completed: {}
});

export default makeMercenary;