CodeLab.NewIssueForm = class extends React.Component {
  constructor(props) {
    super(props)
    this.openNewIssue = this.openNewIssue.bind(this)
    this.styles = {
      inlineText: {
        base: {
          padding: '0 5px'
        }
      }
    }
  }

  openNewIssue(event) {
    event.preventDefault()
    const mentor = this.refs.mentor.getDOMNode().value
    const hostedURL = this.refs.hostedURL.getDOMNode().value
    const newIssueURL = `${ this.props.repoURL }/issues/new?${ $.param({
      title: 'Code Lab Feedback',
      body: `Hey @${mentor}, can you take a look at this? It's [hosted here](${hostedURL}).`
    }) }`
    window.open(newIssueURL, '_blank').focus()
  }

  render() {
    return (
      <button
        type = 'submit'
        className = 'btn btn-primary btn-block'
        onClick = {this.openNewIssue}
        style = {this.props.style}
      >
        <p>
          <span style={this.styles.inlineText.base}>Hey</span>
          <select ref='mentor' name='mentor' onClick={(e) => e.stopPropagation()}>
            {
              CodeLab.helpers.shuffle(CodeLab.config.mentors).map(mentor => {
                return <option key={mentor.username} value={mentor.username}>{ mentor.name }</option>
              })
            }
          </select>
          ,<span style={this.styles.inlineText.base}>can you take a look at this? It's hosted at:</span>
        </p>
        <input
          ref='hostedURL'
          type='text'
          className='form-control'
          placeholder="What's the link for your website?"
          onClick={(e) => e.stopPropagation()}
        />
      </button>
    )
  }
}
