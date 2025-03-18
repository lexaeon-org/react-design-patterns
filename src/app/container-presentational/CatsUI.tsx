import React from 'react';

const CatsUI = (
    {
        cats
    } :
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cats: any
    }
) => {
    return (
        <div>
            {
                cats && cats.map(
                    (
                        cat: { name: string },
                        i: number
                    ) => (
                        <div key={i}>
                            {
                                cat.name
                            }
                        </div>
                    )
                )
            }
        </div>
    );
};

export default CatsUI;