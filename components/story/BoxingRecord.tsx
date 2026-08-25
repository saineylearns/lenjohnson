/** The record, set as a newspaper cutting somebody has since marked up.
 *
 *  Every figure and every phrase in here is already stated elsewhere on this
 *  page — the 95 and the 134 in the chapter above, Ali's 56 of 61 and
 *  Pacquiao's 62 of 72 in the paragraph beside it, 'uncrowned' in the
 *  chapter below, and the fact that no title shot ever came in the chapter
 *  after that. Nothing is asserted here that the story does not already
 *  assert. What is new is the marking: the red stroke down the margin and
 *  the box drawn round the last line are a reader's hand, and they are what
 *  the eye is meant to land on.
 *
 *  No counters, no growing bars. A clipping doesn't animate. */
export default function BoxingRecord() {
  return (
    <figure className="clipping">
      <div className="clipping-masthead">
        <span>The Boxing Record</span>
        <span>Turned pro 1920</span>
      </div>

      <div className="clipping-lead">
        <p className="display-font clipping-name">Len Johnson</p>
        <p className="display-font clipping-figures">
          95 wins <span aria-hidden="true">&mdash;</span> 134 bouts
        </p>
        <p className="clipping-uncrowned">&ldquo;Uncrowned&rdquo;</p>
      </div>

      <hr className="clipping-rule" />

      <dl className="clipping-compare">
        <div className="clipping-compare-row">
          <dt className="display-font">Ali</dt>
          <dd>56 wins &mdash; 61 bouts</dd>
        </div>
        <div className="clipping-compare-row">
          <dt className="display-font">Pacquiao</dt>
          <dd>62 wins &mdash; 72 bouts</dd>
        </div>
      </dl>

      <figcaption className="clipping-mark">Never got a title shot</figcaption>
    </figure>
  );
}
