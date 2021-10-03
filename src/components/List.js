import { CircularProgress } from '@material-ui/core';
import HorizontalSlide from './HorizontalSlide';
import VerticalScroll from './VerticalSlide';

const List = ({ name, data, loading, horizontal }) => {
  return (
    <>
      <h4 style={{ textTransform: 'capitalize' }}>{name}: </h4>
      {loading && (
        <div style={{ margin: '2rem 0', textAlign: 'center' }}>
          <CircularProgress />
        </div>
      )}
      {!loading && !data.length && <p>No {name} to show!</p>}
      {!loading && data.length > 0 && (
        <>
          {horizontal ? (
            <HorizontalSlide>
              {data.map((insight) => (
                <div className='card'>
                  <p>{insight.name}</p>
                  <h2>{insight.value}</h2>
                </div>
              ))}
            </HorizontalSlide>
          ) : (
            <VerticalScroll>
              {data.map((insight) => (
                <div className='card'>
                  <p>{insight.name}</p>
                  <h2>{insight.value}</h2>
                </div>
              ))}
            </VerticalScroll>
          )}
        </>
      )}
    </>
  );
};

export default List;
