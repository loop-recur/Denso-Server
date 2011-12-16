require 'spec_helper'

describe App do
  before do
    @app = Factory.build(:app)
  end
  
  context "associations" do
    it { should have_attached_file(:image) }
    it { should have_attached_file(:package) }
  end
  
  context "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:description) }
  end
  
end
