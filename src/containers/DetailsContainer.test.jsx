import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import DetailContainer from './DetailContainer';

describe('Details Container test', () => {
    it('render villager details by id', async () => {
        render(
            <DetailContainer 
            match={{
                params: {
                    _id: '5f5fb4bbbfd05c2aed82e460'
                },
            }}
            />
        );

        const details = await screen.findByRole('villagerDetails');
        expect(details).toMatchSnapshot();
    })
})