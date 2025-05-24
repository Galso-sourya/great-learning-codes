import React, { useState, useEffect } from 'react';
import IMenuItem from '../../models/IMenuItem';
import LoadingIndicator from '../common/Loadingindicator';
type Props = {
    id: number
};

const Menu = ( { id } : Props) => {
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ items, setItems ] = useState<IMenuItem[]>( [] );
    const [ error, setError ] = useState<string>( '' );
    const [ show, setShow ] = useState<boolean>( false );
    return(
<>
            {
                loading && (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the menu for the restaurant. Please wait..."
                    />
                )
            }
            </>
    )
}
export default Menu;