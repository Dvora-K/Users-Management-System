import React, { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
  title: string
}

const Loader: FC<LoaderProps> = (props: LoaderProps) => (
  <div className='loader-container col-sm-6'>
    <div className='my-loadder'>
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <span className='col-sm-6'>{props.title}</span>
  </div>
);

export default Loader;