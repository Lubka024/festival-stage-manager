import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { FestivalForm } from '../../../components/forms/FestivalForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit festival
			</SlotSources.Title>
			<EditScope entity="Festival(id=$id)" redirectOnSuccess="admin/festival/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/festival/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<FestivalForm />
			</EditScope>
		</>
	)
}
