import { css, cx } from '../../styled-system/css';
import { grid } from '../../styled-system/patterns';

function FormResetTest() {
  return (
    <div
      className={css({
        px: '6',
        color: 'gray.900',
        _dark: {
          color: 'gray.100',
        },
      })}
    >
      <div
        className={css({
          maxW: { base: 'xl', md: '4xl' },
          mx: 'auto',
          py: '12',
          divideY: 'true',
        })}
      >
        <div className={css({ py: '8' })}>
          <h1 className={css({ fontSize: '4xl', fontWeight: 'bold' })}>
            pform-reset examples
          </h1>
          <p className={text600}>
            An opinionated form reset designed to make form elements easy to
            style with utility classes.
          </p>
          <a
            className={css({
              mt: 4,
              fontSize: 'lg',
              textDecoration: 'underline',
            })}
            href="https://github.com/anubra266/pform-reset}}"
          >
            Documentation
          </a>
        </div>

        <div className={css({ py: 12 })}>
          <h2 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
            Unstyled
          </h2>
          <p className={text600}>
            This is how form elements look out of the box.
          </p>
          <div
            className={cx(
              grid({ columns: { base: 1, md: 2 } }),
              css({
                gap: 6,
                alignItems: 'start',
              })
            )}
          >
            <div className={grid({ columns: 1, gap: 6 })}>
              <label className={baseLabel}>
                <span className={color700}>Input (text)</span>
                <input
                  type="text"
                  className={baseInput}
                  placeholder="john@example.com"
                />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (email)</span>
                <input
                  type="email"
                  className={baseInput}
                  placeholder="john@example.com"
                />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (email, multiple)</span>
                <input
                  type="email"
                  multiple
                  className={baseInput}
                  placeholder="john@example.com"
                />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (password)</span>
                <input
                  type="password"
                  className={baseInput}
                  placeholder="john@example.com"
                />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (date)</span>
                <input type="date" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (datetime-local)</span>
                <input type="datetime-local" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (month)</span>
                <input type="month" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (number)</span>
                <input type="number" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (search)</span>
                <input type="search" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (time)</span>
                <input type="time" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (week)</span>
                <input type="week" className={baseInput} />
              </label>
            </div>

            <div className={grid({ columns: 1, gap: 6 })}>
              <label className={baseLabel}>
                <span className={color700}>Input (tel)</span>
                <input
                  type="tel"
                  multiple
                  className={baseInput}
                  placeholder="john@example.com"
                />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (url)</span>
                <input
                  type="url"
                  multiple
                  className={baseInput}
                  placeholder="john@example.com"
                />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Select</span>
                <select className={baseInput}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </label>
              <label className={baseLabel}>
                <span className={color700}>Select (single, with size)</span>
                <select className={baseInput} size={3}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className={baseLabel}>
                <span className={color700}>Select (multiple)</span>
                <select className={baseInput} multiple>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className={baseLabel}>
                <span className={color700}>Select (multiple, with size)</span>
                <select className={baseInput} multiple size={3}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className={baseLabel}>
                <span className={color700}>Textarea</span>
                <textarea
                  className={css({
                    mt: 1,
                    display: 'block',
                    w: 'full',
                    h: '24',
                  })}
                  rows={3}
                  placeholder="Enter some long form content."
                ></textarea>
              </label>
              <fieldset className={baseLabel}>
                <legend className={color700}>Checkboxes</legend>
                <div className={css({ mt: 2 })}>
                  <div>
                    <label
                      className={css({
                        display: 'inline-flex',
                        alignItems: 'center',
                      })}
                    >
                      <input type="checkbox" defaultChecked />
                      <span className={css({ ml: 2 })}>Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label
                      className={css({
                        display: 'inline-flex',
                        alignItems: 'center',
                      })}
                    >
                      <input type="checkbox" />
                      <span className={css({ ml: 2 })}>Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label
                      className={css({
                        display: 'inline-flex',
                        alignItems: 'center',
                      })}
                    >
                      <input type="checkbox" />
                      <span className={css({ ml: 2 })}>Option 3</span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className={baseLabel}>
                <legend className={color700}>Radio Buttons</legend>
                <div className={css({ mt: 2 })}>
                  <div>
                    <label
                      className={css({
                        display: 'inline-flex',
                        alignItems: 'center',
                      })}
                    >
                      <input
                        type="radio"
                        defaultChecked
                        name="radio-direct"
                        value="1"
                      />
                      <span className={css({ ml: 2 })}>Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label
                      className={css({
                        display: 'inline-flex',
                        alignItems: 'center',
                      })}
                    >
                      <input type="radio" name="radio-direct" value="2" />
                      <span className={css({ ml: 2 })}>Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label
                      className={css({
                        display: 'inline-flex',
                        alignItems: 'center',
                      })}
                    >
                      <input type="radio" name="radio-direct" value="3" />
                      <span className={css({ ml: 2 })}>Option 3</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className={css({ py: 12 })}>
          <h2 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
            Untouched
          </h2>
          <p className={text600}>
            {`These are form elements we don't handle (yet?), but we use this to
            make sure we haven't accidentally styled them by mistake.`}
          </p>
          <div
            className={cx(
              grid({ columns: { base: 1, md: 2 } }),
              css({
                gap: 6,
                alignItems: 'start',
                mt: 8,
              })
            )}
          >
            <div className={grid({ columns: 1, gap: 6 })}>
              <label className={baseLabel}>
                <span className={color700}>Input (range)</span>
                <input type="range" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (color)</span>
                <input type="color" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (file)</span>
                <input type="file" className={baseInput} />
              </label>
              <label className={baseLabel}>
                <span className={color700}>Input (file, multiple)</span>
                <input type="file" multiple className={baseInput} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResetTest;

const baseInput = css({ mt: 1, display: 'block', w: 'full' });
const baseLabel = css({ display: 'block' });

const color600 = css({
  color: 'gray.600',
  _dark: {
    color: 'gray.300',
  },
});

const text600 = cx(
  css({
    mt: 2,
    fontSize: 'lg',
  }),
  color600
);

const color700 = css({
  color: 'gray.700',
  _dark: {
    color: 'gray.400',
  },
});
