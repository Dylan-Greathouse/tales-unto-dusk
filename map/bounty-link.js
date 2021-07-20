function bountyLink(bounty) {
    const link = document.createElement('a');
    link.classList.add('bounty');

    const searchParams = new URLSearchParams();
    searchParams.set('id', bounty.id);
    link.href = 'bounty?' + searchParams.toString();


    link.href = '../bounty/?id=' + bounty.id;

    link.style.top = bounty.map.top;
    link.style.left = bounty.map.left;
    link.textContent = bounty.title;

    return link;
}

export default bountyLink;