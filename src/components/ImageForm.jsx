/* eslint-disable react/prop-types */
import { useState } from 'react'

function ImageForm({onUpdateImages}) {
    const [expanded, setExpanded] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [captionText, setCaptionText] = useState('');
    
    const [images, setImages] = useState([]);

    const toggleExpand = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    };

    const handleImageChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleCaptionChange = (e) => {
        setCaptionText(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (imageUrl && captionText) {
            const newImage = { imageUrl, captionText };
            const updatedArray = [...images, newImage]
            setImages(updatedArray);
            setImageUrl('');
            setCaptionText('');
            onUpdateImages(updatedArray);
        }
    };

    return (
    <>
        <nav>
            <form name ='form'>
            <button 
                    className= 'expandInput' 
                    type="button" 
                    onClick={toggleExpand}>+</button>

            {expanded && (
                    <div className='formContainer'>
                            <label htmlFor="imageInput"></label>
                            <input
                                    id="imageInput"
                                    type="text" 
                                    name = 'imageUrl'
                                    placeholder="Enter Image URL" 
                                    pattern="https?://.+" //url pattern
                                    value={imageUrl}
                                    onChange={handleImageChange}/>

                            <label htmlFor="captionInput"></label>
                            <input
                                        id="captionInput"
                                        type="text" 
                                        name='captionText'
                                        placeholder="Enter Caption" 
                                        value={captionText}
                                        onChange={handleCaptionChange}/>

                            <button 
                            className='addImage' 
                            type="button"
                            onClick={handleSubmit}
                            >Add Image</button>

                            <button 
                            className='collapseInput' 
                            type ="button"
                            onClick ={toggleExpand}>Collapse</button>
                    </div>
                )}
            </form>
        </nav>
    </>
    );
}

export default ImageForm;