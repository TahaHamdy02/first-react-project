const TopVideosCardData = [
    { name: 'How To Create Sub Domain', time: '5:14' },
    { name: 'Playing With The DNS', time: '4:00' },
    { name: 'Everything About The Virtual Hosts', time: '5:50' },
    { name: 'How To Monitor Your Website', time: '9:14' },
    { name: 'Uncharted Beating The Last Boss', time: '1:10' },
    { name: 'Ys Oath In Felghana Overview', time: '6:08' },
    { name: 'Ys Series All Games Ending', time: '8:14' },
]




const TopVideosData = TopVideosCardData.map(card => {
    return (
        <li className='info' key={card.time}><h4>{card.name}</h4><span>{card.time}</span></li>
    );
}
)

export default TopVideosData;