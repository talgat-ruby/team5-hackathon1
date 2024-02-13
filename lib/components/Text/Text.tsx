import React, {FC} from 'react';

interface TextProps {
    title?: string,
    description?: string
}

const Text:FC<TextProps> = ({title, description}) => {
    return (
        <hgroup className='flex flex-col gap-y-3'>
            <h3 className='text-denim text-5xl font-bold pb-1.5'>
                {title}
            </h3>
            <p className='text-figmaGray text-2xl font-normal'>
                {description}
            </p>
        </hgroup>
    );
};

export default Text;