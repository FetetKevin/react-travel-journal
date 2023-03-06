export default function Card(props) {
    const { imgSrc, country, dateStart, dateEnd, location, mapLink, description } = props;

    return (
        <article>
            <img class="country-img" src={imgSrc} alt="" />
            <section>
                <div class="content-head">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <h3>{country}</h3>
                    <a href={mapLink}>View on Google Maps</a>
                </div>
                <h2>{location}</h2>
                <h4>
                    {dateStart} - {dateEnd}
                </h4>
                <h5>{description}</h5>
            </section>
        </article>
    );
}
