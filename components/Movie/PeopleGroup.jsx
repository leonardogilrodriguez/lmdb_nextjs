import React from 'react';
import Link from 'next/link';

const PersonLink = props => <Link href={'/person/' + props.id}>{props.name}</Link>;
const PeopleGroup = props => {
    const sliceData = (props.data)? props.data.slice(0, props.limit) : [];
    
    return (sliceData.map((item,index) => {
            const job = (item.job)? item.job : 'cast';
            return (<React.Fragment key={`${job}_${item.id}`}>
                <PersonLink id={item.id} name={item.name} />{ index < sliceData.length - 1 ? ", ": ""}
            </React.Fragment>);
        })
    )
};

export default PeopleGroup;