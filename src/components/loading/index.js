import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`https://sean-char.github.io/netflix-clone/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}