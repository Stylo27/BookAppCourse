class Api::V1::BooksController < ApplicationController
  before_action :find_book, only: %i[update show destroy]

  def index
    @books = Book.all
    render json: @books.to_json, status: :ok
  end
  
  def create
    @book = Book.new(book_params)
    if @book.valid?
      @book.save
      render json: @book.to_json, status: :created
    else
      render json: { error: @book.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @book.update!(book_params)
    render json: @book.to_json, status: :ok
  end

  def show
    render json: @book
  end

  def destroy
    @book.delete
  end

  private

  def find_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:name, :description, :rating, :genre, :author)
  end
end
