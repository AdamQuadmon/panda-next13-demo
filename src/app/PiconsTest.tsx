import { css, cx } from '../../styled-system/css';
import { Container } from '../../styled-system/jsx';
import { icon } from '../../styled-system/recipes';

function PiconsTest() {
  return (
    <Container>
      <div
        className={cx(
          icon({ name: 'mdi:panda' }),
          css({
            color: 'yellow.500',
            fontSize: '6xl',
          })
        )}
      />
      <div
        className={cx(
          icon({ name: 'game-icons:panda' }),
          css({
            color: 'yellow.500',
            fontSize: '6xl',
          })
        )}
      />
    </Container>
  );
}

export default PiconsTest;
