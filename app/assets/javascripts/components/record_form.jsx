var RecordForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    //so much hate towards js callback
    $.post('', {record: this.state}, (function(_this) {
      return function(data) {
        _this.props.handleNewRecord(data);
        return _this.setState(_this.getInitialState());
      };
    })(this), "JSON");
  },
  render: function() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.valid()}>
          Create Record
        </button>
      </form>
    )
  },
  getInitialState: function() {
    return {
      title: "",
      date: "",
      amount: ""
    };
  },
  handleChange: function(e) {
    var name = e.target.name;
    switch (name) {
      case "date":
        this.setState({"date": e.target.value});
        break;
      case "title":
        this.setState({"title": e.target.value});
        break;
      case "amount":
        this.setState({"amount": e.target.value});
        break;
    }
  },
  valid: function() {
    return this.state.title && this.state.amount && this.state.date;
  }
})
