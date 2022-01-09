import Item from '../item/Item';
import * as Styled from './ItemsList.Style';

const ItemsList = ({itemsList, sortBy, searchTerm}) => {
    const filtered = itemsList.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    // const sortedProducts = filteredList.sort((prodA, prodB) => {
    //     console.log(prodA,prodB);
    //
    //     const valueA = prodA[sortBy];
    //     const valueB = prodB[sortBy];
    //     console.log({ prodA, prodB, valueA,valueB });
    //     if (valueA < valueB) {
    //         return -1;
    //     }
    //     if (valueA > valueB) {
    //         return 1;
    //     }
    //     return 0;
    // });
    // if(filteredList.length > 0) {
    //     const sortedArr = filteredList.sort(item => {
    //         return 1
    //     })
    // }

    return <Styled.Div>{filtered.map((item) => <Item key={item.id} item={item}/>)}</Styled.Div>
}

export default ItemsList
