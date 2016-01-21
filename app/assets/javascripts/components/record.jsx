var Record = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td>
      </tr>
    )
  },
  handleDelete: function(e) {
    e.preventDefault();
    $.ajax({
      url: '/records/' + this.props.record.id,
      type: 'DELETE',
      dataType: 'json'
    })
    .done(function() {
      this.props.handleDeleteRecord(this.props.record);
    })
    .fail(function() {
      console.log("error");
    })
  }
})
