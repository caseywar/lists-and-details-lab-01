import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossingContainer from './AnimalCrossingContainer';
import { MemoryRouter } from 'react-router';


describe('Animal Crossings Container', () => {
    it('renders a list of characters on the web page', async () => {
        render(   
        <MemoryRouter>
            <AnimalCrossingContainer />
          </MemoryRouter>);

        screen.getByText('Loading...');

        const ul = await screen.findAllByRole( 'list', {name: 'villagers'});
        expect(ul).toMatchSnapshot();
    });
});
