import { useState } from 'react'
import ImageForm from './ImageForm';
import ImageList from './ImageList';

function ImageBoard() {
    const [images, setImages] = useState([]);

    const handleUpdateImages = (newImages) => {
        console.log('new images:', newImages)
        setImages(newImages);

    };

    return (
        <div>
            {/* Pass images state and update function to ImageForm */}
            <ImageForm onUpdateImages={handleUpdateImages} />
            {/* Pass images state to ImageList */}
            <ImageList images={images} />
        </div>
    );
}

export default ImageBoard;