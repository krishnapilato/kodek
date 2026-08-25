/**
 * Everything behind the content: three drifting colour fields, a hairline
 * grid, film grain and the scroll-progress rule. All of it is CSS — the
 * drift runs on the compositor and the progress bar uses a scroll-driven
 * animation, so none of this touches the main thread.
 */
export default function Ambient() {
  return (
    <>
      <div className="progress" aria-hidden="true">
        <span className="progress__bar" />
      </div>
      <div className="ambient" aria-hidden="true">
        <span className="ambient__field ambient__field--amber" />
        <span className="ambient__field ambient__field--sapphire" />
        <span className="ambient__field ambient__field--celadon" />
        <span className="ambient__grid" />
        <span className="ambient__vignette" />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  );
}
