import React from 'react';
import SampleComponent from './components/SampleComponent';
import ErrorBoundary from './components/ErrorBoundary';
export default(
<div>
    <ErrorBoundary>
    <SampleComponent throwError={false}/></ErrorBoundary>
    <ErrorBoundary><SampleComponent throwError={true}/></ErrorBoundary>
</div>
);