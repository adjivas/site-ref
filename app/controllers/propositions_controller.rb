class PropositionsController < InheritedResources::Base

  private

    def proposition_params
      params.require(:proposition).permit(:published, :message, :reply, :user_id, :approved)
    end
end

