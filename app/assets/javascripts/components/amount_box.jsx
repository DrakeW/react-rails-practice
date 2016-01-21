var AmountBox = React.createClass({
  render: function() {
    var panel_class = "panel panel-" + this.props.type
    return (
      <div className="col-md-4">
        <div className={panel_class}>
          <div className="panel-heading">{this.props.text}</div>
          <div className="panel-body">{amountFormat(his.props.amount)}</div>
        </div>
      </div>
    )
  }
})
