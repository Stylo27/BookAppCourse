require 'swagger_helper'

RSpec.describe 'api/v1/books', type: :request do
  path '/api/v1/books' do
    get 'Take all books' do
      tags 'Books'
      consumes 'application/json'
      produces 'application/json'

      response '200', 'Books list' do
        let!(:books) { create_list(:book, 10) }
        run_test! do |response|
          expect(response.body).to eq(books.to_json)  
        end
      end
    end

    post 'Create new book' do
      tags 'Books'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :book, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          description: { type: :string },
          author: { type: :string },
          genre: { type: :string }
        }
      }

      response '201', 'Books list' do
        let!(:book) { attributes_for(:book) }
        run_test! do |response|
          expect(JSON.parse(response.body)['name']).to eq(book[:name])  
          expect(JSON.parse(response.body)['description']).to eq(book[:description])  
          expect(JSON.parse(response.body)['author']).to eq(book[:author])
          expect(JSON.parse(response.body)['genre']).to eq(book[:genre])
        end
      end
    end
  end

  path '/api/v1/books/{id}' do
    get 'Take a specific book' do
      tags 'Books'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer

      let(:book) { create(:book) }
      
      response '200', 'Book found' do
        let(:id) { book.id }
        run_test! do |response|
          expect(response.body).to eq(book.to_json)  
        end
      end

      response '404', 'Book not found' do
        let(:id) { 'invalid' }
        run_test!
      end
    end

    put 'Update book parameter' do
      tags 'Books'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer
      parameter name: :book, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          description: { type: :string },
          author: { type: :string },
          genre: { type: :string }
        }
      }

      let(:created_book) { create(:book) }
      let(:id) { created_book.id }
      let(:book) do 
        { name: 'Test' }
      end

      response '200', 'Updates attribute' do
        run_test! do |response|
          expect(JSON.parse(response.body)['name']).to eq('Test')
        end
      end
    end

    delete 'Delete book' do
      tags 'Books'
      consumes 'application/json'
      produces 'application/json'
      parameter name: :id, in: :path, type: :integer

      let(:book) { create(:book) }
      let(:id) { book.id }

      response '204', 'Updates attribute' do
        run_test!
      end
    end
  end
end
