import React from 'react';
import './images.css'
import ImageItem from './image-item';

const Images = ({ images, group, setTag }) => {
    const group_images = onGroup(images)
    return (
        <div>
            {group ? Object.keys(group_images).map((tag, index) =>
            <center key={index}>
              <fieldset>
                <div className='legend'><legend>{tag}</legend></div>
                    <ul>
                    {group_images[tag].map(e =>
                        <ImageItem key={e.id}
                                   id={e.id}
                                   tag={e.tag}
                                   image={e.image}
                                   setTag={setTag}/>
                        )}
                    </ul>
              </fieldset>
            </center>)
            :
            <div className='stack'>
                <ul>
                {images.sort((a, b) => {return a.date - b.date}).map(e => 
                    <ImageItem key={e.id}
                               id={e.id}
                               tag={e.tag}
                               image={e.image}
                               setTag={setTag}/>
                    )}
                </ul>
            </div>}
        </div>
    );
};

export default Images;

const onGroup = images => {
    const groups = images.reduce((r, a) => {
        r[a.tag] = r[a.tag] || [];
        r[a.tag].push(a);
        return r;
      }, {});
    return groups
};