class StructuresController < InheritedResources::Base

  # GET /structures
  # GET /structures.json
  def index
    @structures = Structure.all
    @hash = Gmaps4rails.build_markers(@structures) do |structure, 
marker|
      if structure.approved == 1 then
        marker.lat structure.latitude
        marker.lng structure.longitude
      end
    end
  end

  private

    def structure_params
      params.require(:structure).permit(:name, :juridical_id, :description, :address, :longitude, :latitude, :email, :phone, :link, :departement_id, :published, :message, :reply, :user_id, :approved)
    end
end

