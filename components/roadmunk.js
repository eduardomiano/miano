function RoadMunk(props) {

    const url = props.url;
    const width = 10;
    const heigh = 10;

    

    return (
        <div className="bg-red-50 h-full overflow-y-hidden overflow-x-visible ">
            <h1>miano</h1>
            <iframe src={url} title="Roadmap"
                 style={{ width: '100%', height: '100%', overflow: 'auto' }} width="100%" height="100%" ></iframe>
        </div>
    );
}

export default RoadMunk