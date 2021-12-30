function FileHandler() {
  return (
    <div className="container block">
      <div className="columns box">
        <div className="column is-three-quarters">
          <div className="file has-name is-fullwidth">
            <label className="file-label">
              <input className="file-input" type="file" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
        <div className="column is-one-quarter">
            <button className="button is-primary is-fullwidth" id="convert-button">
                <span>Convert</span>
                <span className="icon">
                    <i className="fas fa-compress-arrows-alt"></i>
                </span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default FileHandler;
