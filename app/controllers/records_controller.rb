class RecordsController < ApplicationController
  def index
    @records = Record.all
  end

  def create
    @record = Record.create(record_params)
    if @record.save
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @record = Record.find_by_id(params[:id])
    @record.destroy
    head :no_content
  end

  private

  def record_params
    params.require(:record).permit(:title, :amount, :date)
  end
end
