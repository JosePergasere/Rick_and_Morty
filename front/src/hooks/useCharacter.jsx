import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../redux/actions";

//HOOKSSSSSSSSSSSSSSSSSS
const useCharacter = () => {
  const dispatch = useDispatch();
  const { detailId } = useParams();
  const character = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(detailId)); //componentDidMount Monta el componente

    return () => {
      dispatch(cleanDetail()); //componentWillUnmount Se desmonta
    };
  }, [detailId]); //componentDidUpdate Se actualiza cada vez que su dependencia cambia

  return character;
};

export default useCharacter;
