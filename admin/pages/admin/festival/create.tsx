import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { FestivalForm } from '../../../components/forms/FestivalForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create festival
			</SlotSources.Title>
			<CreateScope entity="Festival" redirectOnSuccess="admin/festival/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create festival" labelSaved="Create festival" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/festival/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Festivals
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<FestivalForm />
				</>
			</CreateScope>
		</>
	)
}
