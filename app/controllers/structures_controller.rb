class StructuresController < InheritedResources::Base

#  actions :show, :new, :create
  
  def index
    @structures = Structure.all
    @hash = Gmaps4rails.build_markers(@structures) do |structure, marker|
      marker.lat structure.latitude
      marker.lng structure.longitude
    end
  end
  
  private

    def structure_params
      params.require(:structure).permit(:name, :juridical_id, :description, :address, :longitude, :latitude, :email, :phone, :link_id, :departement_id, :proposition_id)
    end
end

