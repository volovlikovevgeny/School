import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

const PagesResult = (): ReactElement => {
    const router = useRouter();
    const { session_id } = router.query;
    return (
        <div>
            <h1>Payment result</h1>
            <pre>{session_id}</pre>
        </div>
    );
};

export default PagesResult;
