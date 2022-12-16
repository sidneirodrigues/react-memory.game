import { GridItemType } from '../../types/GridItemsTypes';
import { items } from '../../data/items';
import * as C from './styles';

import b7Svg from '../../assets/svgs/b7.svg'

type Props = {
    item: GridItemType;
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
  return (
    <C.Container onClick={onClick}>
        { !item.permanentShown && !item.shown &&
            <C.Icon src={b7Svg} alt="" />
        }
        { ( item.permanentShown || item.shown ) && item.item !== null &&
            <C.Icon src={items[item.item].icon} alt="" />
        }
    </C.Container>
  )
}


