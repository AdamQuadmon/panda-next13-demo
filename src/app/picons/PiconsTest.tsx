import { css, cx } from '../../../styled-system/css';
import { Container, HStack } from '../../../styled-system/jsx';
import { icon } from '../../../styled-system/recipes';

function PiconsTest() {
  return (
    <Container>
      <HStack>
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
          className={css({
            color: 'yellow.500',
            fontSize: '4xl',
          })}
        >
          color yellow
        </div>
      </HStack>
      <HStack>
        <div
          className={cx(
            icon({ name: 'game-icons:panda' }),
            css({
              color: 'emerald.500',
              fontSize: '6xl',
            })
          )}
        />
        <div
          className={css({
            color: { base: 'emerald.500', _dark: 'violet.400' },
            fontSize: '2xl',
          })}
        >
          color emerald and violet are not present
        </div>
      </HStack>
      <HStack>
        <div
          className={cx(
            icon({ name: { base: 'game-icons:panda', _dark: 'mdi:panda' } }),
            css({
              color: { base: 'purple.500', _dark: 'red.400' },
              fontSize: '6xl',
            })
          )}
        />
        <div
          className={css({
            color: 'emerald.500',
            fontSize: '2xl',
          })}
        >
          {`icon should change on dark mode:`}
        </div>
      </HStack>
      <div>
        {"icon({ name: { base: 'game-icons:panda', _dark: 'mdi:panda' } })"}
      </div>
    </Container>
  );
}

export default PiconsTest;
