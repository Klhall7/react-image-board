/* eslint-disable react/prop-types */

function ImageList({images}) {
    // return <ul>...</ul>;
    return (
        <div>
            <h2>_________</h2>
            <ul>
                {images.map((image, index) => (
                    <li key={index}>
                        {/* Rendering the key values */}
                        <div>
                            <img 
                            src={image.imageUrl} 
                            alt='linked image'
                            style={{ width: 'auto', maxHeight: '350px' }}>
                            </img>
                        </div>
                        <div>{image.captionText}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ImageList;