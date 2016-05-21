class DiagnosticsController < InheritedResources::Base

  private

    def diagnostic_params
      params.require(:diagnostic).permit(:name, :description, :help, :adult, :duration, :diagnostic_id, :departement_id)
    end
end

