import * as React from 'react';
import { Nav } from './Nav';
import { VideoPlayer } from './VideoPlayer';
import { VideoList } from './VideoList';

export const App: React.FunctionComponent = () => (
  <div>
    <h2>
      Hello world!
    </h2>
    <Nav />
    <VideoPlayer />
    <VideoList />
  </div>
);
